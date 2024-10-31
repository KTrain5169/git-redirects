function redirectToCorrectPath() {
    // Get the current path and remove any trailing slash, then make lowercase
    const currentPath = window.location.pathname.replace(/\/$/, '').toLowerCase();

    const pathMappings = {
        '/translator': ['/translator'],
        '/ktools2202': ['/ktools2202'],
        '/unpacker': ['/unpacker'],
        '/python-template': ['/python-template', '/template', '/python-template-repo'],
        '/catpack-crafter': ['/catpacks', '/catpack', '/catpack-crafter'],
        '/source': ['/git-redirects', '/source', '/site-source', '/redirect', '/redirects', '/redirector'],
        '/programming-dictionary': ['/programming', '/program-dictionary', '/programming-dict', '/dict', '/program-dict', '/dictionary'],
        // Add additional mappings as necessary
    };

    // Loop through each correct path and check if the current path matches any allowed path
    for (const correctPath in pathMappings) {
        const allowedPaths = pathMappings[correctPath].map(path => path.toLowerCase().replace(/\/$/, ''));
        if (allowedPaths.includes(currentPath)) {
            window.location.replace(correctPath);
            return;
        }
    }
}

redirectToCorrectPath();
