({
    block : 'page',
    title : 'Material cards)',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'link', attrs : {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Roboto:400,500&subset=latin,cyrillic-ext'} },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'mat-cards' },
    content : [
        {
            block: 'wrap',
            mix: [{block: 'clearfix'}],
            content: [
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'logo',
                                    content: [
                                        {
                                            block : 'image',
                                            url : '../../img/logo.jpg',
                                            title : 'Все подробности на bem.info'
                                        }
                                    ]
                                },
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-image',
                            content: [
                                {
                                    block : 'image',
                                    url : '../../img/parrot.jpg',
                                    title : 'Все подробности на bem.info'
                                },
                                {
                                    elem: 'caption',
                                    content: 'BEM is awesome'
                                }
                            ]
                        },
                        {
                            block: 'card-content',
                            content: [
                                {
                                    tag: 'p', content: 'A dolore repellendus in magni tempora, nulla voluptatum deleniti nobis est doloremque, eaque labore vitae error ipsam.'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'no'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'yes'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-image',
                            content: [
                                {
                                    block : 'image',
                                    width: 320,
                                    url : '../../img/day-night.jpg',
                                    title : 'Все подробности на bem.info'
                                },
                                {
                                    elem: 'caption',
                                    content: 'BEM is awesome'
                                }
                            ]
                        },
                        {
                            block: 'card-content',
                            content: [
                                {
                                    tag: 'p', content: 'A dolore repellendus in magni tempora, nulla voluptatum deleniti nobis est doloremque, eaque labore vitae error ipsam.'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'no'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'yes'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'logo',
                                    content: [
                                        {
                                            block : 'image',
                                            url : '../../img/logo.jpg',
                                            title : 'Все подробности на bem.info'
                                        }
                                    ]
                                },
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-image',
                            content: [
                                {
                                    block : 'image',
                                    width: 320,
                                    url : '../../img/dog.jpg',
                                    title : 'Все подробности на bem.info'
                                },
                                {
                                    elem: 'caption',
                                    content: 'BEM is awesome'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'no'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'yes'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-content',
                            content: [
                                {
                                    tag: 'p', content: 'A dolore repellendus in magni tempora, nulla voluptatum deleniti nobis est doloremque, eaque labore vitae error ipsam.'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-content',
                            content: [
                                {
                                    tag: 'p', content: 'A dolore repellendus in magni tempora, nulla voluptatum deleniti nobis est doloremque, eaque labore vitae error ipsam.'
                                }
                            ]
                        }
                    ]
                },
                 {
                    block: 'card',
                    content: [
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'leave'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'enter'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-aside',
                            content: [
                                {
                                    block: 'image',
                                    url: '../../img/man.jpg'
                                }
                            ]
                        },
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'leave'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'enter'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-aside',
                            mods: {direct: 'right'},
                            content: [
                                {
                                    block: 'image',
                                    url: '../../img/women.jpg'
                                }
                            ]
                        },
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'leave'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'enter'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-content',
                            content: [
                                {
                                    tag: 'p', content: 'A dolore repellendus in magni tempora, nulla voluptatum deleniti nobis est doloremque, eaque labore vitae error ipsam.'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            mods: {align: 'center'},
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'no'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'yes'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'logo',
                                    content: [
                                        {
                                            block : 'image',
                                            url : '../../img/logo.jpg',
                                            title : 'Все подробности на bem.info'
                                        }
                                    ]
                                },
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-content',
                            content: [
                                {
                                    tag: 'p', content: 'A dolore repellendus in magni tempora, nulla voluptatum deleniti nobis est doloremque, eaque labore vitae error ipsam.'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'no'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'yes'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'card',
                    content: [
                        {
                            block: 'card-header',
                            content: [
                                {
                                    elem: 'logo',
                                    content: [
                                        {
                                            block : 'image',
                                            url : '../../img/logo.jpg',
                                            title : 'Все подробности на bem.info'
                                        }
                                    ]
                                },
                                {
                                    elem: 'title',
                                    tag: 'h3',
                                    content: 'Hello card world'
                                },
                                {
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: 'This is subheader'
                                }
                            ]
                        },
                        {
                            block: 'card-footer',
                            mods: {align: 'center'},
                            content: [
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'no'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content : 'no'
                                },
                                {
                                    block : 'link',
                                    mods: {style: 'material',type: 'yes'},
                                    title: 'BEM is awesome',
                                    url : 'https://bem.info/',
                                    content: 'yes'
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
})
