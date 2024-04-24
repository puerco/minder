"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[3220],{10028:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var t=i(74848),s=i(28453);const n={title:"Register Repositories",sidebar_position:50},o=void 0,l={id:"getting_started/register_repos",title:"Register Repositories",description:"Prerequisites",source:"@site/docs/getting_started/register_repos.md",sourceDirName:"getting_started",slug:"/getting_started/register_repos",permalink:"/getting_started/register_repos",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Register Repositories",sidebar_position:50},sidebar:"minder",previous:{title:"Enrolling a Provider",permalink:"/getting_started/enroll_provider"},next:{title:"Creating your first profile",permalink:"/getting_started/first_profile"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Register repositories",id:"register-repositories",level:2},{value:"List and Get Repositories",id:"list-and-get-repositories",level:2},{value:"Deleting a registered repository",id:"deleting-a-registered-repository",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/getting_started/install_cli",children:["The ",(0,t.jsx)(r.code,{children:"minder"})," CLI application"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/getting_started/login",children:"A Minder account"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/getting_started/login#enrolling-the-github-provider",children:"An enrolled GitHub token"})," that is either an Owner in the organization or an Admin on the repositories"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"register-repositories",children:"Register repositories"}),"\n",(0,t.jsxs)(r.p,{children:["Now that you have enrolled with GitHub as a provider, you can now register repositories. We will use the ",(0,t.jsx)(r.code,{children:"repo"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"minder repo register\n"})}),"\n",(0,t.jsx)(r.p,{children:"You can also register a repository (or set of repositories) by name:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'minder repo register --name "owner/repo1,owner/repo2"\n'})}),"\n",(0,t.jsx)(r.p,{children:"A webhook will now be created in each repository that you've selected for registering with Minder.\nYou should see a list of the repositories that have been registered."}),"\n",(0,t.jsx)(r.p,{children:"After registration, Minder will go through your existing profiles and apply them against these repositories."}),"\n",(0,t.jsx)(r.p,{children:"Any events that now occur in your registered repositories will be sent to Minder and processed accordingly."}),"\n",(0,t.jsx)(r.h2,{id:"list-and-get-repositories",children:"List and Get Repositories"}),"\n",(0,t.jsx)(r.p,{children:"You can list all repositories registered in Minder:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"minder repo list\n"})}),"\n",(0,t.jsx)(r.p,{children:"You can also get a specific repository:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"minder repo get --id {ID}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"deleting-a-registered-repository",children:"Deleting a registered repository"}),"\n",(0,t.jsxs)(r.p,{children:["If you want to stop monitoring a repository, you can delete it from Minder by using the ",(0,t.jsx)(r.code,{children:"repo delete"})," command:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'minder repo delete --name "owner/repo1"\n'})}),"\n",(0,t.jsx)(r.p,{children:"This will delete the repository from Minder and remove the webhook from the repository."})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>o,x:()=>l});var t=i(96540);const s={},n=t.createContext(s);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);