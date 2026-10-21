/* SKelite HR Toolkit — single source of truth.
   Rendered into <div id="toolkit-mount"></div> on the homepage and /hr-toolkit.
   Do not duplicate this list anywhere. */
(function () {
  /* ── PREVIEW PDFs ──────────────────────────────────────────────
     Set to true once the eleven watermarked preview PDFs are
     uploaded to /previews/ . Until then the Preview links render
     as plain text so no buyer hits a 404 on a payment page.
     This is the ONLY line to change.                              */
  var PREVIEWS_READY = true;

  var RZP = {
    complete: 'https://rzp.io/rzp/skelite-complete-hr-toolkit',
    starter:  'https://rzp.io/rzp/skelite-hr-toolkit-starter-kit',
    ta:       'https://rzp.io/rzp/skelite-talent-acquisition-pac',
    onb:      'https://rzp.io/rzp/skelite-onboarding-pack',
    perf:     'https://rzp.io/rzp/skelite-performance-pack',
    eng:      'https://rzp.io/rzp/skelite-engagement-pack',
    comp:     'https://rzp.io/rzp/skelite-compliance-and-policy-',
    pay:      'https://rzp.io/rzp/skelite-payroll-and-compensati',
    leave:    'https://rzp.io/rzp/skelite-leave-and-attendance-p',
    ops:      'https://rzp.io/rzp/skelite-hr-operations-pack',
    bgv:      'https://rzp.io/rzp/skelite-bgv-pack',
    hrbp:     'https://rzp.io/rzp/skelite-hrbp-pack'
  };

  var BUNDLES = [
    { best: true, title: 'Complete HR Toolkit', price: '₹2,999',
      desc: 'All 10 packs. 161 editable Word and Excel files. Everything below, together. Worth ₹5,990 if bought pack by pack.',
      btn: 'Buy Now · ₹2,999', url: RZP.complete },
    { best: false, title: 'Starter Kit', price: '₹1,499',
      desc: 'Talent Acquisition, Onboarding, and Compliance &amp; Policy. Hire, onboard and stay compliant through your first 50 people. Worth ₹1,797 separately.',
      btn: 'Buy Now · ₹1,499', url: RZP.starter }
  ];

  var PACKS = [
    { n:'Talent Acquisition Pack', f:19, url:RZP.ta, prev:'/previews/talent-acquisition-pack.pdf',
      d:'Requisition to offer. Job description templates, a structured interview question bank, candidate scorecards, offer letters, and a hiring tracker with cost-per-hire built in.' },
    { n:'Onboarding Pack', f:18, url:RZP.onb, prev:'/previews/onboarding-pack.pdf',
      d:'Appointment letter to confirmation. Day 1 induction agenda, document collection checklist, IT asset allocation, statutory enrolment guide, 30-60-90 day plan and the probation review kit.' },
    { n:'Performance Pack', f:18, url:RZP.perf, prev:'/previews/performance-pack.pdf',
      d:'Goal sheets, a competency framework with rating scales, self and manager review forms, 360 feedback, calibration guidance, performance improvement plans, and increment and promotion letters.' },
    { n:'Engagement Pack', f:11, url:RZP.eng, prev:'/previews/engagement-pack.pdf',
      d:'Full engagement survey and pulse survey kits, stay interview guide, rewards and recognition policy, wellness policy, and a survey analysis dashboard that scores itself.' },
    { n:'Compliance &amp; Policy Pack', f:35, url:RZP.comp, prev:'/previews/compliance-and-policy-pack.pdf',
      d:'The employee handbook and more than twenty policies. POSH policy with the Internal Committee constitution pack, code of conduct, grievance, disciplinary, whistleblower, data privacy, plus a compliance calendar and a threshold tracker that tells you which laws apply at your headcount.',
      note:'Includes the POSH policy, complaint process and Internal Committee constitution pack to set up yourself. Want us to constitute the committee and train your team? That is the <a href="/#hr-advisory" class="tk-inline-link">POSH Compliance Setup</a> above.' },
    { n:'Payroll &amp; Compensation Pack', f:15, url:RZP.pay, prev:'/previews/payroll-and-compensation-pack.pdf',
      d:'Salary structure templates, a CTC calculator, payslip format, monthly payroll checklist, full and final settlement, and a Code on Wages restructuring guide.' },
    { n:'Leave &amp; Attendance Pack', f:13, url:RZP.leave, prev:'/previews/leave-and-attendance-pack.pdf',
      d:'Leave and attendance policies, a holiday calendar with state-by-state guidance, overtime and comp-off policy, leave balance and accrual tracker, and an attendance register.' },
    { n:'HR Operations Pack', f:14, url:RZP.ops, prev:'/previews/hr-operations-pack.pdf',
      d:'Statutory registers guide, HR SOP manual, employee file structure, exit and offboarding process with interview kit, HR audit checklist, and an operations dashboard.' },
    { n:'BGV Pack', f:7, url:RZP.bgv, prev:'/previews/bgv-pack.pdf',
      d:'Background verification policy, a DPDP-compliant candidate consent form, verification checklists, adverse findings process, and a vendor agreement with a data processing schedule.' },
    { n:'HRBP Pack', f:11, url:RZP.hrbp, prev:'/previews/hrbp-pack.pdf',
      d:'HRBP operating model and charter, organisation design guide, workforce plan and headcount model, span of control analyser, and a restructuring playbook.' }
  ];

  var STRIP = [
    ['Editable, not locked', 'Microsoft Word and Excel. Not PDFs. Change anything.'],
    ['Written for India', 'Labour Codes, POSH, DPDP. Filled Indian examples throughout.'],
    ['Yours to keep', 'One payment. No subscription, no renewal, no per-user fee.']
  ];

  function bundleCard(b) {
    return '<div class="tk-bundle' + (b.best ? ' tk-bundle-best' : '') + '">' +
      (b.best ? '<div class="tk-badge">BEST VALUE</div>' : '') +
      '<h3 class="tk-bundle-title">' + b.title + '</h3>' +
      '<div class="tk-bundle-price">' + b.price + '</div>' +
      '<p class="tk-bundle-desc">' + b.desc + '</p>' +
      '<a class="tk-buy tk-buy-lg" href="' + b.url + '" target="_blank" rel="noopener">' + b.btn + '</a>' +
      '</div>';
  }

  function packRow(p, i) {
    return '<div class="tk-row">' +
      '<div class="tk-row-main">' +
        '<div class="tk-row-head"><span class="tk-num">' + (i + 1) + '</span>' +
        '<h4 class="tk-row-title">' + p.n + '</h4></div>' +
        '<p class="tk-row-desc">' + p.d + '</p>' +
        (p.note ? '<p class="tk-row-note">' + p.note + '</p>' : '') +
      '</div>' +
      '<div class="tk-row-meta">' +
        '<div class="tk-files">' + p.f + ' files</div>' +
        '<div class="tk-price">₹599</div>' +
        (PREVIEWS_READY
          ? '<a class="tk-preview" href="' + p.prev + '" target="_blank" rel="noopener">Preview</a>'
          : '<span class="tk-preview-soon">Preview coming soon</span>') +
        '<a class="tk-buy" href="' + p.url + '" target="_blank" rel="noopener">Buy Now · ₹599</a>' +
      '</div>' +
    '</div>';
  }

  function render(mount, opts) {
    opts = opts || {};
    var h = '';

    h += '<div class="tk-head">';
    h += '<div class="tk-eyebrow">HR TOOLKIT · BUY ONLINE</div>';
    h += '<' + (opts.h1 ? 'h1' : 'h2') + ' class="tk-headline">The HR systems we build for clients. Ready to use today.</' + (opts.h1 ? 'h1' : 'h2') + '>';
    h += '<p class="tk-sub">161 editable Word and Excel files, written against the Labour Codes as they stand in 2026. Every template carries a filled Indian example. No call required. From ₹599.</p>';
    h += '</div>';

    h += '<div class="tk-strip">';
    STRIP.forEach(function (s) {
      h += '<div class="tk-strip-item"><div class="tk-strip-t">' + s[0] + '</div><div class="tk-strip-d">' + s[1] + '</div></div>';
    });
    h += '</div>';

    h += '<div class="tk-bundles">' + BUNDLES.map(bundleCard).join('') + '</div>';

    h += '<div class="tk-packs">' + PACKS.map(packRow).join('') + '</div>';

    h += '<p class="tk-versions">Seven of the policies come in two versions: a lean one for small teams and a fuller one for when you have scaled. Use the one that fits you now and switch when you grow.</p>';

    h += '<div class="tk-delivery">' +
      '<div class="tk-delivery-t">How delivery works</div>' +
      '<p>Pay by card, UPI or netbanking. We then share a private Google Drive folder with the email address you give at checkout, usually within 4 working hours. Orders placed in the evening or on a Sunday arrive the next working morning.</p>' +
      '<p>The folder is yours. Download everything, keep it, use it on as many of your own hires as you like.</p>' +
      '</div>';

    h += '<p class="tk-tax">All prices are in INR and inclusive of applicable taxes.</p>';

    h += '<p class="tk-closing">Not sure which pack you need? Write to <a href="mailto:hr@skelite-talent.com">hr@skelite-talent.com</a> and we\'ll tell you straight, even if the answer is none of them.</p>';

    h += '<p class="tk-legal">These are templates, not legal advice. Adapt them to your organisation and have anything contractual reviewed by a qualified employment law practitioner before you use it.</p>';

    mount.innerHTML = h;
  }

  function init() {
    var m = document.getElementById('toolkit-mount');
    if (m) render(m, { h1: m.getAttribute('data-h1') === 'true' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
