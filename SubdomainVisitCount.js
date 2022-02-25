/**
 * 811. Subdomain Visit Count
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let domains;
  let allDom = [''];
  for (i = 0; i < cpdomains.length; i++) {
    domains = teardown(cpdomains[i]);
    for (j = 0; j < domains.length; j++) {
      for (k = 0; k < allDom.length;) {
        if (domains[j][1] == allDom[k + 1]) {
          allDom[k] = parseInt(allDom[k]) + parseInt(domains[j][0]);
          break;
        }
        k = k + 1;
        if (k == allDom.length) {
          allDom.push(domains[j][0], domains[j][1]);
          break;
        }

      }
    }
  }
  for (i = 1; i < allDom.length; i++) {
    allDom[i] = allDom[i] + ' ' + allDom[i + 1];
    allDom.splice(i + 1, 1);
  }
  return allDom.splice(1, allDom.length);
};

function teardown(domain) {
  let domains = [];
  let i;
  let num = domain.substr(0, domain.indexOf(' '));
  domain = '.' + domain.substr(domain.indexOf(' ') + 1, domain.length);
  for (i = 1; i != 0; i = domain.indexOf('.') + 1) {
    domains.push([num, domain.substr(i, domain.length)]);
    domain = domain.substr(i, domain.length);
  }
  return domains;
}