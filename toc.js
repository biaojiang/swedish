// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">2023 Version</li><li class="chapter-item expanded "><a href="dropbox/SVT.html"><strong aria-hidden="true">1.</strong> SVT 2023</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2024 Version</li><li class="chapter-item expanded "><a href="svt/2024/index.html"><strong aria-hidden="true">2.</strong> SVT 2024</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="svt/2024/svt_2024-01.html"><strong aria-hidden="true">2.1.</strong> 2024-01</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-02.html"><strong aria-hidden="true">2.2.</strong> 2024-02</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-03.html"><strong aria-hidden="true">2.3.</strong> 2024-03</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-04.html"><strong aria-hidden="true">2.4.</strong> 2024-04</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-05.html"><strong aria-hidden="true">2.5.</strong> 2024-05</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-06.html"><strong aria-hidden="true">2.6.</strong> 2024-06</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-07.html"><strong aria-hidden="true">2.7.</strong> 2024-07</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-08.html"><strong aria-hidden="true">2.8.</strong> 2024-08</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-09.html"><strong aria-hidden="true">2.9.</strong> 2024-09</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-10.html"><strong aria-hidden="true">2.10.</strong> 2024-10</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-11.html"><strong aria-hidden="true">2.11.</strong> 2024-11</a></li><li class="chapter-item expanded "><a href="svt/2024/SVT_2024-12.html"><strong aria-hidden="true">2.12.</strong> 2024-12</a></li></ol></li><li class="chapter-item expanded "><a href="netflix/netflix.html"><strong aria-hidden="true">3.</strong> Netflix</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="netflix/bonus_family.html"><strong aria-hidden="true">3.1.</strong> Bonus Family</a></li></ol></li><li class="chapter-item expanded "><a href="andra/andra.html"><strong aria-hidden="true">4.</strong> Andra</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="andra/dagens_nyheter.html"><strong aria-hidden="true">4.1.</strong> Dagens Nyheter</a></li><li class="chapter-item expanded "><a href="andra/dn-2024-08.html"><strong aria-hidden="true">4.2.</strong> DN-2024-08</a></li><li class="chapter-item expanded "><a href="andra/dn-2024-09.html"><strong aria-hidden="true">4.3.</strong> DN-2024-09</a></li><li class="chapter-item expanded "><a href="andra/dn-2024-10.html"><strong aria-hidden="true">4.4.</strong> DN-2024-10</a></li><li class="chapter-item expanded "><a href="andra/dn-2024-11.html"><strong aria-hidden="true">4.5.</strong> DN-2024-11</a></li><li class="chapter-item expanded "><a href="andra/dn-2024-12.html"><strong aria-hidden="true">4.6.</strong> DN-2024-12</a></li><li class="chapter-item expanded "><a href="andra/tv4_and_others.html"><strong aria-hidden="true">4.7.</strong> Andra medier</a></li><li class="chapter-item expanded "><a href="andra/aftonbladet_2024-11.html"><strong aria-hidden="true">4.8.</strong> Aftonbladet</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2025 Version</li><li class="chapter-item expanded "><a href="svt/2025/index.html"><strong aria-hidden="true">5.</strong> SVT 2025</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-01.html"><strong aria-hidden="true">5.1.</strong> 2025-01</a></li><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-02.html"><strong aria-hidden="true">5.2.</strong> 2025-02</a></li><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-03.html"><strong aria-hidden="true">5.3.</strong> 2025-03</a></li><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-04.html"><strong aria-hidden="true">5.4.</strong> 2025-04</a></li><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-05.html"><strong aria-hidden="true">5.5.</strong> 2025-05</a></li><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-06.html"><strong aria-hidden="true">5.6.</strong> 2025-06</a></li><li class="chapter-item expanded "><a href="svt/2025/SVT_2025-07.html"><strong aria-hidden="true">5.7.</strong> 2025-07</a></li></ol></li><li class="chapter-item expanded "><a href="dn/dn.html"><strong aria-hidden="true">6.</strong> DN 2025</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dn/2025/dn-2025-01.html"><strong aria-hidden="true">6.1.</strong> 2025-01</a></li><li class="chapter-item expanded "><a href="dn/2025/dn-2025-02.html"><strong aria-hidden="true">6.2.</strong> 2025-02</a></li><li class="chapter-item expanded "><a href="dn/2025/dn-2025-03.html"><strong aria-hidden="true">6.3.</strong> 2025-03</a></li><li class="chapter-item expanded "><a href="dn/2025/dn-2025-04.html"><strong aria-hidden="true">6.4.</strong> 2025-04</a></li><li class="chapter-item expanded "><a href="dn/2025/dn-2025-07.html"><strong aria-hidden="true">6.5.</strong> 2025-07</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
