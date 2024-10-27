// redirect.js
function redirectToCorrectPath() {
    const currentPath = window.location.pathname.toLowerCase(); // Convert current path to lower case

    // Define the correct paths (case-sensitive)
    const pathMappings = {
        '/translator': ['/translator'],
        '/ktools2202': ['/ktools2202'],
        '/unpacker': ['/unpacker'],
        '/python-template': ['/python-template', '/template', '/python-template-repo'],
        '/catpack-crafter': ['/catpacks', '/catpack', '/catpack-crafter'],
        '/source': ['/git-redirects', '/source', '/site-source', '/redirect', '/redirects', '/redirector'],
        // Add additional mappings as necessary
    };

    // Check for a match with any defined paths
    for (const correctPath in pathMappings) {
        const allowedPaths = pathMappings[correctPath];

        // Check if the current path matches any of the allowed paths (case-insensitive)
        if (allowedPaths.some(path => path.toLowerCase() === currentPath)) {
            window.location.replace(correctPath);
            return;
        }
    }
}

// Call the redirect function
redirectToCorrectPath();
