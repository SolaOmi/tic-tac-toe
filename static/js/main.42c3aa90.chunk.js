(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(1),s=n(2),i=n(4),o=n(3),u=n(5),l=n(0),c=n.n(l),m=n(7),h=n.n(m);n(15);function p(e){return c.a.createElement("button",{className:e.isHighlighted?"square highlight":"square",onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this,n=this.props.winner;return c.a.createElement(p,{key:"square"+e.toString(),value:this.props.squares[e],isHighlighted:n&&n.winningPositions.includes(e),onClick:function(){return t.props.onClick(e)}})}},{key:"createBoard",value:function(){for(var e=0,t=[],n=0;n<3;n++){for(var r=[],a=0;a<3;a++)r.push(this.renderSquare(e)),e++;t.push(c.a.createElement("div",{className:"board-row",key:"row"+n.toString()},r))}return t}},{key:"render",value:function(){return c.a.createElement("div",null,this.createBoard())}}]),t}(c.a.Component),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();d(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,position:function(e){return["(1, 1)","(1, 2)","(1, 3)","(2, 1)","(2, 2)","(2, 3)","(3, 1)","(3, 2)","(3, 3)"][e]}(e)}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],a=d(r.squares),s=n.map(function(e,n){var r=n?"Go to move #"+n+" at position "+e.position:"Go to game start",a=n===t.state.stepNumber?"moves-btn bold":"moves-btn";return c.a.createElement("li",{key:n},c.a.createElement("button",{className:a,onClick:function(){return t.jumpTo(n)}},r))});return a?e="Winner: "+a.winner:this.state.stepNumber===r.squares.length?(console.log(this.state.stepNumber),e="Draw"):e="Next player: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{className:"game display"},c.a.createElement("div",{className:"game-board margin-bottom"},c.a.createElement(v,{squares:r.squares,winner:a,onClick:function(e){return t.handleClick(e)}}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){document.getElementById("moves-list").classList.toggle("reverse-list")}},"Sort moves")),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("ol",{id:"moves-list"},s)))}}]),t}(c.a.Component);function d(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(r.a)(t[n],3),s=a[0],i=a[1],o=a[2];if(e[s]&&e[s]===e[i]&&e[s]===e[o])return{winner:e[s],winningPositions:t[n]}}return null}h.a.render(c.a.createElement(b,null),document.getElementById("root"))},15:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.42c3aa90.chunk.js.map