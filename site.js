/* SKelite shared site chrome — nav + footer for every sub-page.
   Edit here once; every page that includes this file updates.
   Mount points:  <div id="site-nav"></div>   <div id="site-footer"></div>  */
(function () {
  var NAV_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"144 122 910 695\" height=\"54\" style=\"display:block;\"><rect width=\"1200\" height=\"840\" fill=\"white\"/><defs><linearGradient id=\"sk-sitenav\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#0D2E30\"/><stop offset=\"100%\" stop-color=\"#114548\"/></linearGradient></defs><g transform=\"translate(30,21) scale(2.28)\"><path d=\"M 272 80 L 147 80 A 45 45 0 0 0 147 170 L 227 170 A 45 45 0 0 1 227 260 L 102 260\" fill=\"none\" stroke=\"url(#sk-sitenav)\" stroke-width=\"50\" stroke-linecap=\"round\"/><path d=\"M 307 80 L 307 260\" fill=\"none\" stroke=\"#148F8A\" stroke-width=\"50\" stroke-linecap=\"round\" opacity=\"0.9\" style=\"mix-blend-mode:multiply\"/><path d=\"M 307 170 L 397 80\" fill=\"none\" stroke=\"#0D2E30\" stroke-width=\"50\" stroke-linecap=\"round\" opacity=\"0.9\" style=\"mix-blend-mode:multiply\"/><path d=\"M 307 160 L 397 260\" fill=\"none\" stroke=\"#FFC300\" stroke-width=\"50\" stroke-linecap=\"round\" opacity=\"0.9\" style=\"mix-blend-mode:multiply\"/><text x=\"250\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"34\" fill=\"#0D2E30\" text-anchor=\"middle\"><tspan font-weight=\"800\">SK</tspan><tspan font-weight=\"400\">elite</tspan></text><text x=\"250\" y=\"335\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"11\" font-weight=\"700\" letter-spacing=\"4\" fill=\"#718096\" text-anchor=\"middle\">TALENT PARTNERS</text></g></svg>";
  var FT_SVG  = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"144 122 910 695\" height=\"64\" style=\"display:block;\"><rect width=\"1200\" height=\"840\" fill=\"white\"/><defs><linearGradient id=\"sk-sitefoot\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#0D2E30\"/><stop offset=\"100%\" stop-color=\"#114548\"/></linearGradient></defs><g transform=\"translate(30,21) scale(2.28)\"><path d=\"M 272 80 L 147 80 A 45 45 0 0 0 147 170 L 227 170 A 45 45 0 0 1 227 260 L 102 260\" fill=\"none\" stroke=\"url(#sk-sitefoot)\" stroke-width=\"50\" stroke-linecap=\"round\"/><path d=\"M 307 80 L 307 260\" fill=\"none\" stroke=\"#148F8A\" stroke-width=\"50\" stroke-linecap=\"round\" opacity=\"0.9\" style=\"mix-blend-mode:multiply\"/><path d=\"M 307 170 L 397 80\" fill=\"none\" stroke=\"#0D2E30\" stroke-width=\"50\" stroke-linecap=\"round\" opacity=\"0.9\" style=\"mix-blend-mode:multiply\"/><path d=\"M 307 160 L 397 260\" fill=\"none\" stroke=\"#FFC300\" stroke-width=\"50\" stroke-linecap=\"round\" opacity=\"0.9\" style=\"mix-blend-mode:multiply\"/><text x=\"250\" y=\"315\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"34\" fill=\"#0D2E30\" text-anchor=\"middle\"><tspan font-weight=\"800\">SK</tspan><tspan font-weight=\"400\">elite</tspan></text><text x=\"250\" y=\"335\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"11\" font-weight=\"700\" letter-spacing=\"4\" fill=\"#718096\" text-anchor=\"middle\">TALENT PARTNERS</text></g></svg>";

  var CSS = [
  '.sv-nav{background:#fff;border-bottom:1px solid var(--tp);padding:10px 5vw;position:sticky;top:0;z-index:60;}',
  '.sv-nav-in{max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;}',
  '.sv-logo{display:inline-flex;align-items:center;text-decoration:none;}',
  '.sv-links{display:flex;align-items:center;gap:26px;}',
  '.sv-links a{font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;transition:color .2s;}',
  '.sv-links a:hover{color:var(--teal);}',
  '.sv-cta{background:linear-gradient(135deg,var(--teal),var(--td));color:#fff;border:none;border-radius:100px;padding:10px 20px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap;}',
  '.sv-burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px;}',
  '.sv-burger span{width:22px;height:2px;background:var(--tdp);border-radius:2px;display:block;}',
  '.sv-mob{display:none;flex-direction:column;padding:10px 5vw 16px;background:#fff;border-bottom:1px solid var(--tp);}',
  '.sv-mob.open{display:flex;}',
  '.sv-mob a{padding:11px 4px;font-size:15px;font-weight:600;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--tg);}',
  '.sv-foot{background:var(--tg);border-top:1px solid var(--tp);padding:60px 5vw 32px;}',
  '.sv-foot-in{max-width:1180px;margin:0 auto;}',
  '.sv-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:36px;margin-bottom:48px;}',
  '.sv-grid h4{font-size:11px;font-weight:800;color:var(--td);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:16px;}',
  '.sv-grid a,.sv-grid .sv-item{font-size:13px;color:var(--gray);display:block;margin-bottom:10px;text-decoration:none;}',
  '.sv-grid a:hover{color:var(--td);}',
  '.sv-tag{font-size:13px;color:var(--gray);line-height:1.7;margin:14px 0 0;}',
  '.sv-grieve{font-size:11.5px;color:var(--gray);line-height:1.75;border-top:1px solid var(--tp);padding-top:14px;margin-top:16px;}',
  '.sv-grieve strong{color:var(--ink);}',
  '.sv-grieve a{color:var(--gray);text-decoration:underline;}',
  '.sv-bottom{border-top:1px solid var(--tp);padding-top:26px;}',
  '.sv-bottom-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px 28px;margin-bottom:18px;}',
  '.sv-copy{font-size:12.5px;color:var(--gray);}',
  '.sv-legal{display:flex;align-items:center;gap:18px;flex-wrap:wrap;}',
  '.sv-legal a{font-size:12.5px;color:var(--gray);font-weight:600;text-decoration:underline;}',
  '.sv-note{background:#fff;border:1px solid var(--tp);border-radius:12px;padding:14px 18px;}',
  '.sv-note .l1{font-size:12px;color:var(--ink);line-height:1.7;margin-bottom:8px;}',
  '.sv-note .l2{font-size:11px;color:var(--gray);line-height:1.7;}',
  '@media(max-width:900px){.sv-grid{grid-template-columns:1fr 1fr;gap:28px;}}',
  '@media(max-width:760px){.sv-links{display:none;}.sv-burger{display:flex;}}',
  '@media(max-width:560px){.sv-grid{grid-template-columns:1fr;gap:24px;}}'
  ].join('\n');

  var LINKS = [
    ['/#services','Hiring'],
    ['/#hr-advisory','HR Services'],
    ['/hr-toolkit','HR Toolkit'],
    ['/#process','Process'],
    ['/#engage','Engage'],
    ['/#contact','Contact']
  ];

  function a(href, text, extra) {
    return '<a href="' + href + '"' + (extra || '') + '>' + text + '</a>';
  }

  function navHTML() {
    var l = LINKS.map(function (x) { return a(x[0], x[1]); }).join('');
    return '<nav class="sv-nav"><div class="sv-nav-in">'
      + '<a class="sv-logo" href="/" aria-label="SKelite Talent Partners home">' + NAV_SVG + '</a>'
      + '<div class="sv-links">' + l + a('/#contact', 'Book a Call', ' class="sv-cta"') + '</div>'
      + '<button class="sv-burger" aria-label="Menu" id="sv-burger"><span></span><span></span><span></span></button>'
      + '</div></nav>'
      + '<div class="sv-mob" id="sv-mob">' + l + a('/#contact', 'Book a Call') + '</div>';
  }

  function footHTML() {
    var hiring = ['Recruitment &amp; Talent Acquisition', 'Executive &amp; CXO Search', 'Volume Hiring']
      .map(function (t) { return a('/#services', t); }).join('');
    var hrs = [['/#hr-advisory', 'POSH Compliance Setup'], ['/#hr-advisory', 'HR Operations Setup'],
               ['/#hr-advisory', 'HR Compliance &amp; Policy'], ['/hr-toolkit', 'HR Toolkit']]
      .map(function (x) { return a(x[0], x[1]); }).join('');
    var comp = [['/privacy-policy', 'Privacy Policy'], ['/refund-policy', 'Refund &amp; Cancellation Policy'],
                ['/delivery-policy', 'Delivery Policy'], ['/#contact', 'Contact']]
      .map(function (x) { return a(x[0], x[1]); }).join('');
    var conn = a('mailto:hr@skelite-talent.com', '📧 hr@skelite-talent.com')
      + a('tel:+918103108993', '📞 Contact')
      + a('https://www.linkedin.com/company/skelite-talent-partners/', '💼 LinkedIn', ' target="_blank" rel="noopener"')
      + a('https://www.instagram.com/skelitetalentpartners', '📸 Instagram', ' target="_blank" rel="noopener"');

    return '<footer class="sv-foot"><div class="sv-foot-in">'
      + '<div class="sv-grid">'
      +   '<div>' + FT_SVG
      +     '<p class="sv-tag">Elite Minds. Exceptional Matches.<br/>Fast. Focused. People-First.</p>'
      +     '<div class="sv-grieve"><strong>Customer care &amp; grievance officer</strong><br/>Esha Dubey<br/>'
      +       a('mailto:hr@skelite-talent.com', 'hr@skelite-talent.com') + '<br/>'
      +       'We acknowledge every complaint within 48 hours and resolve it within 30 days.</div>'
      +   '</div>'
      +   '<div><h4>Hiring</h4>' + hiring + '</div>'
      +   '<div><h4>HR Services</h4>' + hrs + '</div>'
      +   '<div><h4>Company</h4>' + comp + '</div>'
      +   '<div><h4>Connect</h4>' + conn + '</div>'
      + '</div>'
      + '<div class="sv-bottom"><div class="sv-bottom-row">'
      +   '<div class="sv-copy">© 2025–26 SKelite Talent Partners. All rights reserved.</div>'
      +   '<div class="sv-legal">' + a('/privacy-policy', 'Privacy Policy') + a('/refund-policy', 'Refund &amp; Cancellation') + a('/delivery-policy', 'Delivery') + '</div>'
      + '</div>'
      + '<div class="sv-note"><div class="l1">All pricing in INR · GST extra where applicable · Final commercials subject to scope discussion</div>'
      +   '<div class="l2">*Replacement guarantee is subject to role, engagement tier, and conditions agreed upfront at the time of engagement. Applicable within a defined period post-joining. Please speak to us for full details applicable to your specific engagement.</div></div>'
      + '</div></div></footer>';
  }

  function init() {
    var s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);

    var n = document.getElementById('site-nav');
    if (n) n.outerHTML = navHTML();

    var f = document.getElementById('site-footer');
    if (f) f.outerHTML = footHTML();

    var b = document.getElementById('sv-burger');
    if (b) b.addEventListener('click', function () {
      document.getElementById('sv-mob').classList.toggle('open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
