var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),
        fileCopy: require('enb/techs/file-copy'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        cssStylus: require('enb-stylus/techs/css-stylus'),
        cssAutoprefixer: require('enb-autoprefixer/techs/css-autoprefixer'),

        // js
        browserJs: require('enb-diverse-js/techs/browser-js'),
        prependYm: require('enb-modules/techs/prepend-modules'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree-old'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml-old'),
        htmlFromBemjson: require('enb-bemxjst/techs/html-from-bemjson')
    },
    enbBemTechs = require('enb-bem-techs'),
    beautify = require('enb-beautify/techs/enb-beautify-html'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks',
        'hakaton.blocks'
    ],

    fse = require('fs-extra'),
    path = require('path'),
    glob = require('glob'),

    rootDir = path.join(__dirname, '..');

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    /**
     * Task for build dist package, it will create folder 'dist'
     * and put in it *.html, *.css, *.js, img dir
     * depend: .borschik config
     */
    config.task('dist', function (task) {

        // build targets and copy it to 'dist' folder
        function copyTargets(buildInfo) {
            buildInfo.builtTargets.forEach(function (target) {
                    var src = path.join(rootDir, target),
                        dst = path.join(rootDir, 'dist', path.basename(target));

                    fse.copySync(src, dst);
                });
        }

        return task.buildTargets(glob.sync('*.bundles/*'))
            .then(function (buildInfo) {
                copyTargets(buildInfo);
                task.log('Dist was created.');
            });
    });

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.cssStylus, { target: '?.noprefix.css' }],
            [techs.cssAutoprefixer, {
                sourceTarget: '?.noprefix.css',
                destTarget: '?.css',
                browserSupport: ['last 2 versions', 'ie 10', 'opera 12.16']
            }],

            // bemtree
            // [techs.bemtree, { devMode: process.env.BEMTREE_ENV === 'development' }],

            // bemhtml
            [techs.bemhtml, { devMode: process.env.BEMHTML_ENV === 'development' }],

            // html
            [techs.htmlFromBemjson, { target: '_?.html' }],
            //[techs.htmlFromBemjson, { target: '?.html' }],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // js
            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.bemhtml.js', '?.browser.js']
            }],
            [techs.prependYm, { source: '?.pre.js' }],

            // borschik
            [techs.borschik, { sourceTarget: '_?.html', destTarget: '_?.borschik.html', freeze: isProd }],
            [techs.borschik, { sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: isProd }],
            [techs.borschik, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', freeze: isProd, minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '_?.css', '_?.js']);
    });

    config.mode('development', function() {
        config.nodes('*.bundles/*', function(nodeConfig) {
            nodeConfig.addTechs([
                [techs.fileCopy, { sourceTarget: '_?.borschik.html', destTarget: '?.html' }]
            ]);
        });
    });

    config.mode('production', function() {
        config.nodes('*.bundles/*', function(nodeConfig) {
            nodeConfig.addTechs([
                // html beautify
                [beautify, { htmlFile: '_?.borschik.html', target: '?.html' }]
            ]);
        });
    });
};