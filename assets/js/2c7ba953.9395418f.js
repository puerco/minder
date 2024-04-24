"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[103],{89858:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const l={title:"Known Vulnerabilities",sidebar_position:60},r="Known Vulnerabilities Rule",o={id:"ref/rules/pr_vulnerability_check",title:"Known Vulnerabilities",description:"The following rule type is available for known vulnerabilities.",source:"@site/docs/ref/rules/pr_vulnerability_check.md",sourceDirName:"ref/rules",slug:"/ref/rules/pr_vulnerability_check",permalink:"/ref/rules/pr_vulnerability_check",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Known Vulnerabilities",sidebar_position:60},sidebar:"minder",previous:{title:"Secret Scanning",permalink:"/ref/rules/secret_scanning"},next:{title:"GitHub Actions",permalink:"/ref/rules/github_actions"}},a={},c=[{value:"<code>pr_vulnerability_check</code> - Verifies that pull requests do not add dependencies with known vulnerabilities",id:"pr_vulnerability_check---verifies-that-pull-requests-do-not-add-dependencies-with-known-vulnerabilities",level:2},{value:"Entity",id:"entity",level:3},{value:"Type",id:"type",level:3},{value:"Rule Parameters",id:"rule-parameters",level:3},{value:"Rule Definition Options",id:"rule-definition-options",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"known-vulnerabilities-rule",children:"Known Vulnerabilities Rule"}),"\n",(0,t.jsx)(n.p,{children:"The following rule type is available for known vulnerabilities."}),"\n",(0,t.jsxs)(n.h2,{id:"pr_vulnerability_check---verifies-that-pull-requests-do-not-add-dependencies-with-known-vulnerabilities",children:[(0,t.jsx)(n.code,{children:"pr_vulnerability_check"})," - Verifies that pull requests do not add dependencies with known vulnerabilities"]}),"\n",(0,t.jsxs)(n.p,{children:["For every pull request submitted to a repository, this rule will check if the pull request\nadds a new dependency with known vulnerabilities based on the ",(0,t.jsx)(n.a,{href:"https://osv.dev/",children:"OSV database"}),". If it does, the rule will fail and the\npull request will be rejected or commented on."]}),"\n",(0,t.jsx)(n.h3,{id:"entity",children:"Entity"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pull_request"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pr_vulnerability_check"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"rule-parameters",children:"Rule Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"None"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"rule-definition-options",children:"Rule Definition Options"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"pr_vulnerability_check"})," rule has the following options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"action"})," (string): The action to take if a vulnerability is found. Valid values are:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"review"}),": Minder will review the PR, suggest changes and mark the PR as changes requested if a vulnerability is found"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"commit_status"}),": Minder will comment and suggest changes on the PR if a vulnerability is found. Additionally, Minder\nwill set the commit_status of the PR ",(0,t.jsx)(n.code,{children:"HEAD"})," to ",(0,t.jsx)(n.code,{children:"failed"})," to prevent the commit from being merged"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"comment"}),": Minder will comment and suggest changes on the PR if a vulnerability is found, but not request changes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"summary"}),": The evaluator engine will add a single summary comment with a table listing the vulnerabilities found"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"profile_only"}),": The evaluator engine will merely pass on an error, marking the profile as failed if a vulnerability is found"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ecosystem_config"}),": An array of ecosystem configurations to check. Each ecosystem configuration has the following options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," (string): The name of the ecosystem to check. Currently ",(0,t.jsx)(n.code,{children:"npm"}),", ",(0,t.jsx)(n.code,{children:"go"})," and ",(0,t.jsx)(n.code,{children:"pypi"})," are supported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vulnerability_database_type"})," (string): The kind of vulnerability database to use. Currently only ",(0,t.jsx)(n.code,{children:"osv"})," is supported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vulnerability_database_endpoint"})," (string): The endpoint of the vulnerability database to use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"package_repository"}),": The package repository to use. This is an object with the following options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"url"})," (string): The URL of the package repository to use. Only the ",(0,t.jsx)(n.code,{children:"go"})," ecosystem uses this option."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sum_repository"}),": The Go sum repository to use. This is an object with the following options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"url"})," (string): The URL of the Go sum repository to use."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that if the ",(0,t.jsx)(n.code,{children:"review"})," action is selected, ",(0,t.jsx)(n.code,{children:"minder"})," will only be able to mark the PR as changes requested if the submitter\nis not the same as the Minder identity. If the submitter is the same as the\nMinder identity, the PR will only be commented on."]}),"\n",(0,t.jsxs)(n.p,{children:["Also note that if ",(0,t.jsx)(n.code,{children:"commit_status"})," action is selected, the PR can only be prevented from merging if the branch protection rules\nare set to require a passing commit status."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- type: pr_vulnerability_check\n  def:\n  action: review\n  ecosystem_config:\n  - name: npm\n    vulnerability_database_type: osv\n    vulnerability_database_endpoint: https://api.osv.dev/v1/query\n    package_repository:\n      url: https://registry.npmjs.org\n  - name: go\n    vulnerability_database_type: osv\n    vulnerability_database_endpoint: https://api.osv.dev/v1/query\n    package_repository:\n      url: https://proxy.golang.org\n    sum_repository:\n      url: https://sum.golang.org\n  - name: pypi\n    vulnerability_database_type: osv\n    vulnerability_database_endpoint: https://api.osv.dev/v1/query\n    package_repository:\n      url: https://pypi.org/pypi\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);