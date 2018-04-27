(function loadPrism() {

    /* Process all <code> elements */
    var codeElements = $('pre > code[class*=lang-], pre > code[class*=language-]'); // All code elements with class language-* or lang-*
    if (codeElements.length) {
        codeElements.each(processCodeElement);
    };

    /* Process a <code> element */
    function processCodeElement() {
        var code = $(this);
        var pre = code.parent();

        processClass(code);
        processLineNumbers(code, pre);
        processDataStart(code, pre);
        processDataLine(code, pre);
        processDataLineOffset(code, pre);
    }

    /**
     * Apparently, Ghost removes everything after the first space in <code>'s class attribute.
     * As a workaround, I use "." as a separator in Markdown and replace it with spaces here.
     */
    function processClass(code) {
        code.attr('class', code.attr('class').replace(/\./g, " "));
    }

    /* Process line-numbers */
    function processLineNumbers(code, pre) {
        // Remove line-numbers from code and add it to pre
        if (code.attr('class').indexOf("line-numbers") >= 0) {
            code.attr('class', code.attr('class').replace("line-numbers", ""));
            pre.addClass("line-numbers");
        }
    }

    /* Process data-start */
    function processDataStart(code, pre) {
        // Remove data-start from code class and add it to pre as an attribute
        var regex = /data-start="([0-9]+)"/;
        var match = code.attr('class').match(regex);
        if (match) {
            code.attr('class', code.attr('class').replace(regex, ""));
            pre.attr('data-start', match[1]);
        }
    }

    /* Process data-line */
    function processDataLine(code, pre) {
        // Remove data-line from code class and add it to pre as an attribute
        var regex = /data-line="(([0-9]|-|,)+)"/;
        var match = code.attr('class').match(regex);
        if (match) {
            code.attr('class', code.attr('class').replace(regex, ""));
            pre.attr('data-line', match[1]);
        }
    }

    /* Process data-line-offset */
    function processDataLineOffset(code, pre) {
        // Remove data-line-offset from code class and add it to pre as an attribute
        var regex = /data-line-offset="([0-9]+)"/;
        var match = code.attr('class').match(regex);
        if (match) {
            code.attr('class', code.attr('class').replace(regex, ""));
            pre.attr('data-line-offset', match[1]);
        }
    }

})();
