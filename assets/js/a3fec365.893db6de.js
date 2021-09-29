"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[957],{9613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3160:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var n=r(98),a=r(6862),l=(r(9496),r(9613)),o=["components"],i={sidebar_label:"Private Cloud Deployment",sidebar_position:1},p="Private Cloud Deployment",d={unversionedId:"faqs/deployment_infrastructure/privateclouddeployment",id:"faqs/deployment_infrastructure/privateclouddeployment",isDocsHomePage:!1,title:"Private Cloud Deployment",description:"GMetri services, if required, can be deployed safely in your private cloud (firewalled zone). The preferred mode of a private cloud deployment is through Kubernetes.",source:"@site/docs/faqs/04_deployment_infrastructure/02_privateclouddeployment.md",sourceDirName:"faqs/04_deployment_infrastructure",slug:"/faqs/deployment_infrastructure/privateclouddeployment",permalink:"/docs/faqs/deployment_infrastructure/privateclouddeployment",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/faqs/04_deployment_infrastructure/02_privateclouddeployment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Private Cloud Deployment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Firewalls and Whitelisting",permalink:"/docs/faqs/deployment_infrastructure/firewallsandwhitelisting"},next:{title:"SCORM FAQs",permalink:"/docs/faqs/scorm"}},m=[{value:"Private Cloud Deployment (firewalled zone)",id:"private-cloud-deployment-firewalled-zone",children:[{value:"Server Requirements",id:"server-requirements",children:[]}]},{value:"Single Rack-server/Desktop Deployment",id:"single-rack-serverdesktop-deployment",children:[{value:"Hardware Requirements",id:"hardware-requirements",children:[]}]},{value:"Which network ports needs to open for a private cloud deployment?",id:"which-network-ports-needs-to-open-for-a-private-cloud-deployment",children:[{value:"Operating System Requirements",id:"operating-system-requirements",children:[]},{value:"Network Requirements",id:"network-requirements",children:[]}]}],u={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"private-cloud-deployment"},"Private Cloud Deployment"),(0,l.kt)("p",null,"GMetri services, if required, can be deployed safely in your private cloud (firewalled zone). The preferred mode of a private cloud deployment is through Kubernetes."),(0,l.kt)("h2",{id:"private-cloud-deployment-firewalled-zone"},"Private Cloud Deployment (firewalled zone)"),(0,l.kt)("p",null,"The GMETRI platform deploys as a Kubernetes cluster.  "),(0,l.kt)("p",null,"Below are the hardware and network requirements to set up a Kubernetes cluster in a private cloud that supports the GMetri platform."),(0,l.kt)("h3",{id:"server-requirements"},"Server Requirements"),(0,l.kt)("p",null,"The following table lists the ",(0,l.kt)("strong",{parentName:"p"},"minimum")," requirements setting up a High Availability (HA) cluster:  "),(0,l.kt)("h4",{id:"on-cloud-awsgcpazure"},"On Cloud (AWS/GCP/Azure)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Spec")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Production Values")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Recommended Node Type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AWS: m4.xlarge/m5.xlarge ",(0,l.kt)("br",null)," GC: e2-standard-4 ",(0,l.kt)("br",null)," Azure: D4d v4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Nodes (Virtual Machines) with vCPUs >2Ghz"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3 worker nodes ",(0,l.kt)("br",null),"  Min requirement for each node: ",(0,l.kt)("br",null),"  4 core vCPU + 16 GB RAM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16 GB \xd7 number of nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Storage (SSD Based or better)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Min 256 GB per node supporting >500 sequential IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Managed DB instance*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Managed DB instances from AWS/GCP/Azure with the minimum config of 4core vCPU + 16 GB RAM")))),(0,l.kt)("h4",{id:"bare-metal-ha-setup"},"Bare Metal (HA Setup)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Spec")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Production Values")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Servers with every core >2Ghz"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3 (etcd + control plane) + 3 worker nodes ",(0,l.kt)("br",null)," Minimum 4 servers on at-least 3 different physical machines (in case the servers are VMs) ",(0,l.kt)("br",null),"  Min requirement for each node: ",(0,l.kt)("br",null),"  4 core vCPU + 16 GB RAM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"16 GB \xd7 number of nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Storage (SSD Based or better)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Min 256 GB per node supporting >500 sequential IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Managed DB instance"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3 x 4 core vCPU + 16 GB RAM")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full network connectivity between all systems in the cluster"),(0,l.kt)("li",{parentName:"ul"},"Ability to configure open ports on these systems"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Failure resilience for production servers"),": 1 for master nodes and 1 for worker nodes separately. The resilience is of (n-1)/2 nodes per node-type where n is the number of nodes.  ")),(0,l.kt)("h2",{id:"single-rack-serverdesktop-deployment"},"Single Rack-server/Desktop Deployment"),(0,l.kt)("p",null,"We ideally recommend that GMetri is deployed on a cluster setup in a private cloud consisting of a minimum of 3 servers. However, in cases where that is not possible, GMetri can also be deployed on a single rack-server or a desktop."),(0,l.kt)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,l.kt)("p",null,"The following are the recommended hardware requirements for such a deployment:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Hardware")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Specification")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Example")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A 4-core/8-thread processor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Intel i7-7700K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,l.kt)("td",{parentName:"tr",align:"center"},"32 GB DDR-4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Corsair LPX 32GB (2x16GB) 3200MHz")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HDD"),(0,l.kt)("td",{parentName:"tr",align:"center"},"256 GB SSD or SAS storage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Samsung 860 EVO 250GB SSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"LAN Ports"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A single LAN port is enough"),(0,l.kt)("td",{parentName:"tr",align:"center"},"(Part of the server/desktop)")))),(0,l.kt)("p",null," Keep in mind that this is not a HA (High Availability) setup. This means that any hardware failure could lead to permanent loss of data. In cases where data resiliency is critical, we recommend a ",(0,l.kt)("a",{parentName:"p",href:"#what-are-the-recommended-server-requirements-for-gmetri-deployment-in-a-private-cloud-firewalled-zone"},"cluster setup"),"."),(0,l.kt)("h2",{id:"which-network-ports-needs-to-open-for-a-private-cloud-deployment"},"Which network ports needs to open for a private cloud deployment?"),(0,l.kt)("p",null," Ideally, within the cluster, communication needs to be open - i.e. all cluster nodes should be able to contact all ports of all other cluster nodes.  "),(0,l.kt)("p",null," However in case a list of open ports is required, you can use the following list:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Within Cluster (In AND Out)"),(0,l.kt)("th",{parentName:"tr",align:"center"},"External Load Balancer (In)"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Internet (Out)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Kubernetes Specific"),(0,l.kt)("td",{parentName:"tr",align:"center"},"22 TCP ",(0,l.kt)("br",null)," 80 TCP",(0,l.kt)("br",null)," 443 TCP",(0,l.kt)("br",null)," 2376 TCP",(0,l.kt)("br",null)," 2379 TCP",(0,l.kt)("br",null)," 2380 TCP",(0,l.kt)("br",null)," 6443 TCP ",(0,l.kt)("br",null),"6783 TCP ",(0,l.kt)("br",null),"6783-6784 UDP",(0,l.kt)("br",null)," 8472 UDP ",(0,l.kt)("br",null),"9099 TCP",(0,l.kt)("br",null)," 10250 TCP",(0,l.kt)("br",null)," 10254 TCP"),(0,l.kt)("td",{parentName:"tr",align:"center"},"80 TCP 443 TCP"),(0,l.kt)("td",{parentName:"tr",align:"center"},"git.rancher.io:",(0,l.kt)("br",null)," 35.160.43.145:32 ",(0,l.kt)("br",null),"35.167.242.46:32 ",(0,l.kt)("br",null),"52.33.59.17:32 ",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},".gmetri.com ",(0,l.kt)("br",null)," "),".gmetri.io ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},".vrgmetri.com ",(0,l.kt)("br",null)," "),".docker.io")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Workload Specific"),(0,l.kt)("td",{parentName:"tr",align:"center"},"30000-32767 TCP & UDP"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Experience Specific"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000-3100 TCP",(0,l.kt)("br",null)," 3306 TCP",(0,l.kt)("br",null)," 5432 TCP",(0,l.kt)("br",null)," 6739 TCP"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"operating-system-requirements"},"Operating System Requirements"),(0,l.kt)("p",null,"The Operating System used will depend completely on the flavour of Kubernetes deployed. Examples are RancherOS, Ubuntu, CoreOS etc.  "),(0,l.kt)("h4",{id:"preferred-os"},"Preferred OS"),(0,l.kt)("p",null,"For Bare Metal deployment: Ubuntu 18+  "),(0,l.kt)("h4",{id:"partitioning"},"Partitioning"),(0,l.kt)("p",null,"Ensure that there is no swap partition."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Partition"),(0,l.kt)("th",{parentName:"tr",align:null},"Space Allocation"),(0,l.kt)("th",{parentName:"tr",align:null},"Partition Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NO swap"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/ (root)"),(0,l.kt)("td",{parentName:"tr",align:null},"20 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"ext4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/home"),(0,l.kt)("td",{parentName:"tr",align:null},"10 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"ext4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/var"),(0,l.kt)("td",{parentName:"tr",align:null},"Remaining space"),(0,l.kt)("td",{parentName:"tr",align:null},"ext4")))),(0,l.kt)("h3",{id:"network-requirements"},"Network Requirements"),(0,l.kt)("h4",{id:"network-response-time"},"Network Response Time"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spec"),(0,l.kt)("th",{parentName:"tr",align:null},"Web-browser to Datacenter"),(0,l.kt)("th",{parentName:"tr",align:null},"Within Datacenter"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bandwidth"),(0,l.kt)("td",{parentName:"tr",align:null},"5 Mbps minimum"),(0,l.kt)("td",{parentName:"tr",align:null},"100 Mbps minimum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"250-300 milliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1 millisecond on LAN")))),(0,l.kt)("p",null,"Within the cluster, ideally communication needs to be open - i.e. all cluster nodes should be able to contact all ports of all other cluster nodes."),(0,l.kt)("p",null,"In case a list of specific ports is needed, refer to this ",(0,l.kt)("a",{parentName:"p",href:"#which-network-ports-needs-to-open-for-a-private-cloud-deployment"},"here"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internet Connectivity Requirement")," During updates and initial installation, internet connectivity is needed. For usual operations, internet connectivity isn\u2019t required.  "),(0,l.kt)("h4",{id:"example-rack-serverdesktop-tower-configuration"},"Example Rack Server/Desktop Tower configuration"),(0,l.kt)("p",null,"An example of a single rack server or a desktop tower to support the above deployment would be the following:"),(0,l.kt)("p",null,"An example of a single rack server or a desktop tower to support the above deployment would be the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended Spec"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"A CPU with 4 threads"),(0,l.kt)("td",{parentName:"tr",align:null},"Intel i5-7400 or better")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"16GB DDR4 or better"),(0,l.kt)("td",{parentName:"tr",align:null},"Corsair LPX 16GB 3200MHz")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HDD"),(0,l.kt)("td",{parentName:"tr",align:null},"256 GB SSD or SAS storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Samsung 860 EVO 250GB SSD")))),(0,l.kt)("p",null,"4 or 6 such servers/desktop towers are required to form a cluster as mentioned above."),(0,l.kt)("p",null,"For any other queries, write to ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@gmetri.com"},"support@gmetri.com")))}s.isMDXComponent=!0}}]);