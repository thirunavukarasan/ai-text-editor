(this["webpackJsonplong-shot-ai-editor"]=this["webpackJsonplong-shot-ai-editor"]||[]).push([[0],{190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var i=a(4),r=a.n(i),n=a(48),s=a.n(n),o=(a(92),a(18)),l=a(19),c=a(37),d=a(21),u=a(20),h=a(87),p=a(38),g=a(0),b=r.a.createContext(),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).seteditorWords=function(e){i.setState({editorWords:e})},i.setreadabilty=function(e){var t=e.toFixed(0),a="N/A";t<10?a="Extremely difficult to read":t>=10&&t<30?a="Very difficult to read":t>=30&&t<50?a="Difficult to read":t>=50&&t<60?a="Fairly difficult to read":t>=60&&t<70?a="Plain English.Easily understood by 13- to 15-year-old students.":t>=70&&t<80?a="Fairly easy to read":t>=80&&t<90?a="Easy to read":t>=90&&t<=100&&(a="Very easy to read"),i.setState({readabilty:a})},i.setpowerWords=function(e){i.setState({powerWords:e})},i.state={children:e.children,editorWords:0,readabilty:"N/A",powerWords:"N/A",seteditorWords:i.seteditorWords,setreadabilty:i.setreadabilty,setpowerWords:i.setpowerWords},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(b.Provider,{value:this.state,children:this.state.children})}}]),a}(i.Component),j=(a(189),["Laziest","Heartwarming","Guilt","Expensive","Funniest","Gargantuan","Inspiring","Guilt-free","Glamorous","Hilarious","Gigantic","Profound","Indulgent","Luxurious","Laugh","Huge","Zen","Obsessed","Ridiculous","Intense","Alive","Ravenous","Massive","Light","Lazy","Gripping","Healthy","Goddamn","Seriously","Challenge","Begging","Basic","Adorable","Genius","Discover","Crave","Cheat-Sheet","Awe-Inspiring","Memorable","Extraordinary","Decadent","Easy","Beautiful","Undeniable","Hack","Delirious","Effortless","Breathtaking","Unforgettable","Latest","Fantasy","Ingredients","Dazzling","Unpopular","Life-changing","Forbidden","Minimalist","Gorgeous","Impressive","Magic","Irresistible","On-Demand","Stunning","Embarrassing","Miracle","Naked","Painless","Swoon","New","Provocative","Rules","Swoon-worthy","Remarkable","Seductive","Savvy","Revolutionary","Sexy","Simple","Sensational","Sinful","Step-by-Step","Shocking","Tantalizing","Stupid-simple","Spoiler","Satisfy","Tricks","Startling","Tweaks","Suddenly","Surprising","Unexpected","Strange","Weird","Odd","Unusual","Bold","Amp","Alarming","Agonizing","Completely","Affordable","Exciting","Blast","Crushing","Apocalypse","Copy","Bargain","Fascinating","Ignite","Dead","Armageddon","Detailed","Barrage","Intriguing","Jumpstart","Deceptive","Battle","Essential","Bonus","Riveting","Kickstart","Devastating","Corrupt","Impenetrable","Budget","Tempting","Launch","Excruciating","Crazy","Meticulous","Cheap","Thrilling","Quick-start","Exposed","Deadly","Overcome","Convert","Transform","Speedy","Heartbreaking","Disgusting","Painstaking","Double","Supercharge","Sadly","Fight","Practical","Drive","Turbocharge","Shaming","Frenzy","Recreate","Forever","Smuggle","Suffer","Hate","Replicate","Free","Avoid","Insane","Relentless","Immediately","Demoralizing","Lunatic","Ultimate","Increase","Problem","Menacing","Master","Instantly","Painful","Perfect","Money","Poison","Super","Never","Rowdy","Create","Now","Sabotaging","Step-by-Step","Off-limits","Savage","Best","Overnight","Sins","Truly","Profit","Struggle","Packed","Promote","Treacherous","Extremely","Sale","Uncontrollable","Deep","Today","Vicious","Better","Triple","Violent","Unlimited","Weak","Envy","Wild","Master","Dying","Lucrative","Horrifying","Steal","Attack","Traumatized","Insult","Horribly","Hell","Absolute","Admit","Absurd","Accuse","Alluring","All-Inclusive","Breaking","Achieve","Assault","Amazing","Authentic","Confess","Awkward","Beware","Astonishing","Authoritative","Confession","Blunder","Broke","Astounding","Authority","Divulge","Clueless","Catastrophe","Awesome","Backed","Elite","Cringeworthy","Caution","Badass","Bona fide","Emerging","Dumb","Cheat","Bomb","Complete","First","Fail","Dangerous","Brilliant","Comprehensive","Hidden","Fail-Proof","Diagnosed","Catapult","Conclusive","Insider","Failure","Dirty","Charming","Definitive","Little-known","Faux Pas","Emergency","Defying","Document","New","Fool","Ethical","Delicious","Expert","Popular","Foolish","Exactly","Delightful","Final","Priceless","Idiot","Fierce","Dreamy","Formula","Rare","Lame","Hoax","Epic","Genuine","Release","Last","Horror","Explosive","Guaranteed","Reveal","Mediocre","Jeopardy","Exquisite","Honest","Secret","Mistake","Lifetime","Greatness","Ironclad","Sly","Obvious","Protect","Heavenly","Legitimate","Sneak-Peek","Pitiful","Provoke","Incredible","Literally","Sneaky","Reject","Punch","Jaw-dropping","Official","Special","Rookie","Recession-Proof","Kickass","Powerful","Stealthy","Ruin","Sacred","Legendary","Proven","Trend","Senseless","Safe","Mesmerizing","Psychological","Truth","Shameful","Scam","Mouth-watering","Reliable","Unadulterated","Silly","Scared","Nail","Report","Unconventional","Stupid","Shaking","Spellbinding","Research","Uncovered","Success","Signs","Sublime","Results","Undercover","Threaten","Survive","Triumph","Solution","Underused","Triggers","Terrifying","Unbelievable","Strategy","Unique","Unknowingly","Unstoppable","Unleashed","Studies","Unseen","Useless","Belong","Polarizing","Surefire","Untapped","Waste","Promise","Dominate","Validate","Worst","Stop","Masterclass"]),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={editorState:p.EditorState.createEmpty(),powerWords:[],powerWordCount:0,predictedWords:[]},i.onEditorStateChange=i.onEditorStateChange.bind(Object(c.a)(i)),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=j.map((function(e){return e.toLowerCase()}));this.setState({powerWords:e})}},{key:"onEditorStateChange",value:function(){var e=this;this.setState({predictedWords:[]});var t=0,a=0,i=0,r=0;Object(p.convertToRaw)(this.state.editorState.getCurrentContent()).blocks.map((function(e){return e.text})).join("\n").trim().replaceAll("\n"," ").replace(/[ ]{2,}/gi," ").split(".").forEach((function(n){if(n){var s=n.split(" ").filter((function(e){return e})),o=s.length;s.forEach((function(t){var a=t.toLowerCase();e.state.powerWords.indexOf(a)>-1&&-1===e.state.predictedWords.indexOf(a)&&(e.state.predictedWords.push(a),r=e.state.predictedWords.length,e.setState({predictedWords:e.state.predictedWords,powerWordCount:r})),0===e.state.predictedWords.length&&e.setState({powerWordCount:r})})),t+=o,i+=2*o-2,a++}}));var n=206.835-t/a*1.015-i/t*84.6;this.context.setreadabilty(n),this.context.seteditorWords(t),this.context.setpowerWords(this.state.powerWordCount)}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsx)(h.Editor,{initialEditorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){e.setState({editorState:t}),setTimeout((function(){return e.onEditorStateChange()}),100)}})})}}]),a}(i.Component);f.contextType=b;var v=f,y=(a(190),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"sideBar",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"text-left",children:"Performance"}),Object(g.jsx)("div",{className:"card",children:Object(g.jsxs)("div",{className:"card-body p-2",children:[Object(g.jsxs)("div",{className:"head-icon",children:[Object(g.jsx)("h5",{className:"card-title text-left",children:"Power Words"}),Object(g.jsxs)("span",{children:[" ",Object(g.jsx)("i",{className:"fas fa-info","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top"})]})]}),Object(g.jsx)("p",{className:"card-text text-left power-word-p",children:this.context.powerWords})]})}),Object(g.jsx)("div",{className:"card",children:Object(g.jsxs)("div",{className:"card-body p-2",children:[Object(g.jsxs)("div",{className:"head-icon",children:[Object(g.jsx)("h5",{className:"card-title text-left",children:"Readability"}),Object(g.jsxs)("span",{children:[" ",Object(g.jsx)("i",{className:"fas fa-info","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top"})]})]}),Object(g.jsx)("p",{className:"card-text text-left readabilty-word-p",children:this.context.readabilty})]})}),Object(g.jsx)("div",{className:"card",children:Object(g.jsxs)("div",{className:"card-body p-2",children:[Object(g.jsx)("h5",{className:"card-title text-left",children:"Words Count"}),Object(g.jsx)("p",{className:"card-text text-left word-count-p",children:this.context.editorWords})]})})]}),Object(g.jsxs)("div",{className:"mt-4",children:[Object(g.jsx)("h3",{className:"text-left",children:"Adds on"}),Object(g.jsx)("div",{className:"card",children:Object(g.jsx)("div",{className:"card-body",children:Object(g.jsx)("a",{href:"/",className:"btn btn-primary",children:"Fact Check"})})})]}),Object(g.jsxs)("div",{className:"my-4",children:[Object(g.jsx)("h3",{className:"text-left",children:"Key Words To Use"}),Object(g.jsx)("div",{className:""})]})]})}}]),a}(i.Component));y.contextType=b;var x=y;var S=function(){return Object(g.jsx)(m,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"container text-center",children:[Object(g.jsx)("h1",{className:"my-5",children:"Long Shot AI Text Editor"}),Object(g.jsxs)("div",{className:"row border border-light",children:[Object(g.jsx)("div",{className:"col-9 p-0",children:Object(g.jsx)(v,{})}),Object(g.jsx)("div",{className:"col-3 bg-light",children:Object(g.jsx)(x,{})})]})]})})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),r(e),n(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),O()},92:function(e,t,a){}},[[191,1,2]]]);
//# sourceMappingURL=main.1aa9725b.chunk.js.map