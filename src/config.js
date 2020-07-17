var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir:                root,
    // Targets ========================================================
    serveDir:               path.join(root, '.serve'),
    distDir:                path.join(root, 'dist'),
    clientManifestFile:     'manifest.webpack.json',
    clientStatsFile:        'stats.webpack.json',

    // Source Directory ===============================================
    srcDir:                 path.join(root, 'src'),
    srcServerDir:           path.join(root, 'server'),

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'src', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'Seldey Bilişim',
    siteDescription:        'Seldey Bilişim Dashboard',
    siteCannonicalUrl:      'http://localhost:3000',
    siteKeywords:           'seldey bilisim dashboard bootstrap admin panel',
    scssIncludes:           []
}

module.exports = config;