(function(d){var e=d.each;function c(g,h){var j=h.ownerDocument,f=j.createRange(),k;f.setStartBefore(h);f.setEnd(g.endContainer,g.endOffset);k=j.createElement("body");k.appendChild(f.cloneContents());return k.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi,"-").replace(/<[^>]+>/g,"").length==0}function a(g,f){return parseInt(g.getAttribute(f)||1)}function b(H,G,K){var g,L,D,o;t();o=G.getParent(K.getStart(),"th,td");if(o){L=F(o);D=I();o=z(L.x,L.y)}function A(N,M){N=N.cloneNode(M);N.removeAttribute("id");return N}function t(){var M=0;g=[];e(["thead","tbody","tfoot"],function(N){var O=G.select("> "+N+" tr",H);e(O,function(P,Q){Q+=M;e(G.select("> td, > th",P),function(W,R){var S,T,U,V;if(g[Q]){while(g[Q][R]){R++}}U=a(W,"rowspan");V=a(W,"colspan");for(T=Q;T<Q+U;T++){if(!g[T]){g[T]=[]}for(S=R;S<R+V;S++){g[T][S]={part:N,real:T==Q&&S==R,elm:W,rowspan:U,colspan:V}}}})});M+=O.length})}function z(M,O){var N;N=g[O];if(N){return N[M]}}function s(O,M,N){if(O){N=parseInt(N);if(N===1){O.removeAttribute(M,1)}else{O.setAttribute(M,N,1)}}}function j(M){return M&&(G.hasClass(M.elm,"mceSelected")||M==o)}function k(){var M=[];e(H.rows,function(N){e(N.cells,function(O){if(G.hasClass(O,"mceSelected")||O==o.elm){M.push(N);return false}})});return M}function r(){var M=G.createRng();M.setStartAfter(H);M.setEndAfter(H);K.setRng(M);G.remove(H)}function f(M){var N;d.walk(M,function(P){var O;if(P.nodeType==3){e(G.getParents(P.parentNode,null,M).reverse(),function(Q){Q=A(Q,false);if(!N){N=O=Q}else{if(O){O.appendChild(Q)}}O=Q});if(O){O.innerHTML=d.isIE?"&nbsp;":'<br data-mce-bogus="1" />'}return false}},"childNodes");M=A(M,false);s(M,"rowSpan",1);s(M,"colSpan",1);if(N){M.appendChild(N)}else{if(!d.isIE){M.innerHTML='<br data-mce-bogus="1" />'}}return M}function q(){var M=G.createRng();e(G.select("tr",H),function(N){if(N.cells.length==0){G.remove(N)}});if(G.select("tr",H).length==0){M.setStartAfter(H);M.setEndAfter(H);K.setRng(M);G.remove(H);return}e(G.select("thead,tbody,tfoot",H),function(N){if(N.rows.length==0){G.remove(N)}});t();row=g[Math.min(g.length-1,L.y)];if(row){K.select(row[Math.min(row.length-1,L.x)].elm,true);K.collapse(true)}}function u(S,Q,U,R){var P,N,M,O,T;P=g[Q][S].elm.parentNode;for(M=1;M<=U;M++){P=G.getNext(P,"tr");if(P){for(N=S;N>=0;N--){T=g[Q+M][N].elm;if(T.parentNode==P){for(O=1;O<=R;O++){G.insertAfter(f(T),T)}break}}if(N==-1){for(O=1;O<=R;O++){P.insertBefore(f(P.cells[0]),P.cells[0])}}}}}function C(){e(g,function(M,N){e(M,function(P,O){var S,R,T,Q;if(j(P)){P=P.elm;S=a(P,"colspan");R=a(P,"rowspan");if(S>1||R>1){s(P,"rowSpan",1);s(P,"colSpan",1);for(Q=0;Q<S-1;Q++){G.insertAfter(f(P),P)}u(O,N,R-1,S)}}})})}function p(V,S,Y){var P,O,X,W,U,R,T,M,V,N,Q;if(V){pos=F(V);P=pos.x;O=pos.y;X=P+(S-1);W=O+(Y-1)}else{P=L.x;O=L.y;X=D.x;W=D.y}T=z(P,O);M=z(X,W);if(T&&M&&T.part==M.part){C();t();T=z(P,O).elm;s(T,"colSpan",(X-P)+1);s(T,"rowSpan",(W-O)+1);for(R=O;R<=W;R++){for(U=P;U<=X;U++){if(!g[R]||!g[R][U]){continue}V=g[R][U].elm;if(V!=T){N=d.grep(V.childNodes);e(N,function(Z){T.appendChild(Z)});if(N.length){N=d.grep(T.childNodes);Q=0;e(N,function(Z){if(Z.nodeName=="BR"&&G.getAttrib(Z,"data-mce-bogus")&&Q++<N.length-1){T.removeChild(Z)}})}G.remove(V)}}}q()}}function l(Q){var M,S,P,R,T,U,N,V,O;e(g,function(W,X){e(W,function(Z,Y){if(j(Z)){Z=Z.elm;T=Z.parentNode;U=A(T,false);M=X;if(Q){return false}}});if(Q){return !M}});for(R=0;R<g[0].length;R++){if(!g[M][R]){continue}S=g[M][R].elm;if(S!=P){if(!Q){O=a(S,"rowspan");if(O>1){s(S,"rowSpan",O+1);continue}}else{if(M>0&&g[M-1][R]){V=g[M-1][R].elm;O=a(V,"rowSpan");if(O>1){s(V,"rowSpan",O+1);continue}}}N=f(S);s(N,"colSpan",S.colSpan);U.appendChild(N);P=S}}if(U.hasChildNodes()){if(!Q){G.insertAfter(U,T)}else{T.parentNode.insertBefore(U,T)}}}function h(N){var O,M;e(g,function(P,Q){e(P,function(S,R){if(j(S)){O=R;if(N){return false}}});if(N){return !O}});e(g,function(S,T){var P,Q,R;if(!S[O]){return}P=S[O].elm;if(P!=M){R=a(P,"colspan");Q=a(P,"rowspan");if(R==1){if(!N){G.insertAfter(f(P),P);u(O,T,Q-1,R)}else{P.parentNode.insertBefore(f(P),P);u(O,T,Q-1,R)}}else{s(P,"colSpan",P.colSpan+1)}M=P}})}function n(){var M=[];e(g,function(N,O){e(N,function(Q,P){if(j(Q)&&d.inArray(M,P)===-1){e(g,function(T){var R=T[P].elm,S;S=a(R,"colSpan");if(S>1){s(R,"colSpan",S-1)}else{G.remove(R)}});M.push(P)}})});q()}function m(){var N;function M(Q){var P,R,O;P=G.getNext(Q,"tr");e(Q.cells,function(S){var T=a(S,"rowSpan");if(T>1){s(S,"rowSpan",T-1);R=F(S);u(R.x,R.y,1,1)}});R=F(Q.cells[0]);e(g[R.y],function(S){var T;S=S.elm;if(S!=O){T=a(S,"rowSpan");if(T<=1){G.remove(S)}else{s(S,"rowSpan",T-1)}O=S}})}N=k();e(N.reverse(),function(O){M(O)});q()}function E(){var M=k();G.remove(M);q();return M}function J(){var M=k();e(M,function(O,N){M[N]=A(O,true)});return M}function B(O,N){var P=k(),M=P[N?0:P.length-1],Q=M.cells.length;e(g,function(S){var R;Q=0;e(S,function(U,T){if(U.real){Q+=U.colspan}if(U.elm.parentNode==M){R=1}});if(R){return false}});if(!N){O.reverse()}e(O,function(T){var S=T.cells.length,R;for(i=0;i<S;i++){R=T.cells[i];s(R,"colSpan",1);s(R,"rowSpan",1)}for(i=S;i<Q;i++){T.appendChild(f(T.cells[S-1]))}for(i=Q;i<S;i++){G.remove(T.cells[i])}if(N){M.parentNode.insertBefore(T,M)}else{G.insertAfter(T,M)}})}function F(M){var N;e(g,function(O,P){e(O,function(R,Q){if(R.elm==M){N={x:Q,y:P};return false}});return !N});return N}function w(M){L=F(M)}function I(){var O,N,M;N=M=0;e(g,function(P,Q){e(P,function(S,R){var U,T;if(j(S)){S=g[Q][R];if(R>N){N=R}if(Q>M){M=Q}if(S.real){U=S.colspan-1;T=S.rowspan-1;if(U){if(R+U>N){N=R+U}}if(T){if(Q+T>M){M=Q+T}}}}})});return{x:N,y:M}}function v(S){var P,O,U,T,N,M,Q,R;D=F(S);if(L&&D){P=Math.min(L.x,D.x);O=Math.min(L.y,D.y);U=Math.max(L.x,D.x);T=Math.max(L.y,D.y);N=U;M=T;for(y=O;y<=M;y++){S=g[y][P];if(!S.real){if(P-(S.colspan-1)<P){P-=S.colspan-1}}}for(x=P;x<=N;x++){S=g[O][x];if(!S.real){if(O-(S.rowspan-1)<O){O-=S.rowspan-1}}}for(y=O;y<=T;y++){for(x=P;x<=U;x++){S=g[y][x];if(S.real){Q=S.colspan-1;R=S.rowspan-1;if(Q){if(x+Q>N){N=x+Q}}if(R){if(y+R>M){M=y+R}}}}}G.removeClass(G.select("td.mceSelected,th.mceSelected"),"mceSelected");for(y=O;y<=M;y++){for(x=P;x<=N;x++){if(g[y][x]){G.addClass(g[y][x].elm,"mceSelected")}}}}}d.extend(this,{deleteTable:r,split:C,merge:p,insertRow:l,insertCol:h,deleteCols:n,deleteRows:m,cutRows:E,copyRows:J,pasteRows:B,getPos:F,setStartCell:w,setEndCell:v})}d.create("tinymce.plugins.TablePlugin",{init:function(g,h){var f,m,j=true;function l(p){var o=g.selection,n=g.dom.getParent(p||o.getNode(),"table");if(n){return new b(n,g.dom,o)}}function k(){g.getBody().style.webkitUserSelect="";if(j){g.dom.removeClass(g.dom.select("td.mceSelected,th.mceSelected"),"mceSelected");j=false}}e([["table","table.desc","mceInsertTable",true],["delete_table","table.del","mceTableDelete"],["delete_col","table.delete_col_desc","mceTableDeleteCol"],["delete_row","table.delete_row_desc","mceTableDeleteRow"],["col_after","table.col_after_desc","mceTableInsertColAfter"],["col_before","table.col_before_desc","mceTableInsertColBefore"],["row_after","table.row_after_desc","mceTableInsertRowAfter"],["row_before","table.row_before_desc","mceTableInsertRowBefore"],["row_props","table.row_desc","mceTableRowProps",true],["cell_props","table.cell_desc","mceTableCellProps",true],["split_cells","table.split_cells_desc","mceTableSplitCells",true],["merge_cells","table.merge_cells_desc","mceTableMergeCells",true]],function(n){g.addButton(n[0],{title:n[1],cmd:n[2],ui:n[3]})});if(!d.isIE){g.onClick.add(function(n,o){o=o.target;if(o.nodeName==="TABLE"){n.selection.select(o);n.nodeChanged()}})}g.onPreProcess.add(function(o,p){var n,q,r,t=o.dom,s;n=t.select("table",p.node);q=n.length;while(q--){r=n[q];t.setAttrib(r,"data-mce-style","");if((s=t.getAttrib(r,"width"))){t.setStyle(r,"width",s);t.setAttrib(r,"width","")}if((s=t.getAttrib(r,"height"))){t.setStyle(r,"height",s);t.setAttrib(r,"height","")}}});g.onNodeChange.add(function(q,o,s){var r;s=q.selection.getStart();r=q.dom.getParent(s,"td,th,caption");o.setActive("table",s.nodeName==="TABLE"||!!r);if(r&&r.nodeName==="CAPTION"){r=0}o.setDisabled("delete_table",!r);o.setDisabled("delete_col",!r);o.setDisabled("delete_table",!r);o.setDisabled("delete_row",!r);o.setDisabled("col_after",!r);o.setDisabled("col_before",!r);o.setDisabled("row_after",!r);o.setDisabled("row_before",!r);o.setDisabled("row_props",!r);o.setDisabled("cell_props",!r);o.setDisabled("split_cells",!r);o.setDisabled("merge_cells",!r)});g.onInit.add(function(r){var p,t,q=r.dom,u;f=r.windowManager;r.onMouseDown.add(function(w,z){if(z.button!=2){k();t=q.getParent(z.target,"td,th");p=q.getParent(t,"table")}});q.bind(r.getDoc(),"mouseover",function(C){var A,z,B=C.target;if(t&&(u||B!=t)&&(B.nodeName=="TD"||B.nodeName=="TH")){z=q.getParent(B,"table");if(z==p){if(!u){u=l(z);u.setStartCell(t);r.getBody().style.webkitUserSelect="none"}u.setEndCell(B);j=true}A=r.selection.getSel();try{if(A.removeAllRanges){A.removeAllRanges()}else{A.empty()}}catch(w){}C.preventDefault()}});r.onMouseUp.add(function(F,G){var z,B=F.selection,H,I=B.getSel(),w,C,A,E;if(t){if(u){F.getBody().style.webkitUserSelect=""}function D(J,L){var K=new d.dom.TreeWalker(J,J);do{if(J.nodeType==3&&d.trim(J.nodeValue).length!=0){if(L){z.setStart(J,0)}else{z.setEnd(J,J.nodeValue.length)}return}if(J.nodeName=="BR"){if(L){z.setStartBefore(J)}else{z.setEndBefore(J)}return}}while(J=(L?K.next():K.prev()))}H=q.select("td.mceSelected,th.mceSelected");if(H.length>0){z=q.createRng();C=H[0];E=H[H.length-1];z.setStartBefore(C);z.setEndAfter(C);D(C,1);w=new d.dom.TreeWalker(C,q.getParent(H[0],"table"));do{if(C.nodeName=="TD"||C.nodeName=="TH"){if(!q.hasClass(C,"mceSelected")){break}A=C}}while(C=w.next());D(A);B.setRng(z)}F.nodeChanged();t=u=p=null}});r.onKeyUp.add(function(w,z){k()});r.onKeyDown.add(function(w,z){n(w)});r.onMouseDown.add(function(w,z){if(z.button!=2){n(w)}});function o(D,z,A,F){var B=3,G=D.dom.getParent(z.startContainer,"TABLE"),C,w,E;if(G){C=G.parentNode}w=z.startContainer.nodeType==B&&z.startOffset==0&&z.endOffset==0&&F&&(A.nodeName=="TR"||A==C);E=(A.nodeName=="TD"||A.nodeName=="TH")&&!F;return w||E}function n(A){if(!d.isWebKit){return}var z=A.selection.getRng();var C=A.selection.getNode();var B=A.dom.getParent(z.startContainer,"TD,TH");if(!o(A,z,C,B)){return}if(!B){B=C}var w=B.lastChild;while(w.lastChild){w=w.lastChild}z.setEnd(w,w.nodeValue.length);A.selection.setRng(z)}r.plugins.table.fixTableCellSelection=n;if(r&&r.plugins.contextmenu){r.plugins.contextmenu.onContextMenu.add(function(A,w,C){var D,B=r.selection,z=B.getNode()||r.getBody();if(r.dom.getParent(C,"td")||r.dom.getParent(C,"th")||r.dom.select("td.mceSelected,th.mceSelected").length){w.removeAll();if(z.nodeName=="A"&&!r.dom.getAttrib(z,"name")){w.add({title:"advanced.link_desc",icon:"link",cmd:r.plugins.advlink?"mceAdvLink":"mceLink",ui:true});w.add({title:"advanced.unlink_desc",icon:"unlink",cmd:"UnLink"});w.addSeparator()}if(z.nodeName=="IMG"&&z.className.indexOf("mceItem")==-1){w.add({title:"advanced.image_desc",icon:"image",cmd:r.plugins.advimage?"mceAdvImage":"mceImage",ui:true});w.addSeparator()}w.add({title:"table.desc",icon:"table",cmd:"mceInsertTable",value:{action:"insert"}});w.add({title:"table.props_desc",icon:"table_props",cmd:"mceInsertTable"});w.add({title:"table.del",icon:"delete_table",cmd:"mceTableDelete"});w.addSeparator();D=w.addMenu({title:"table.cell"});D.add({title:"table.cell_desc",icon:"cell_props",cmd:"mceTableCellProps"});D.add({title:"table.split_cells_desc",icon:"split_cells",cmd:"mceTableSplitCells"});D.add({title:"table.merge_cells_desc",icon:"merge_cells",cmd:"mceTableMergeCells"});D=w.addMenu({title:"table.row"});D.add({title:"table.row_desc",icon:"row_props",cmd:"mceTableRowProps"});D.add({title:"table.row_before_desc",icon:"row_before",cmd:"mceTableInsertRowBefore"});D.add({title:"table.row_after_desc",icon:"row_after",cmd:"mceTableInsertRowAfter"});D.add({title:"table.delete_row_desc",icon:"delete_row",cmd:"mceTableDeleteRow"});D.addSeparator();D.add({title:"table.cut_row_desc",icon:"cut",cmd:"mceTableCutRow"});D.add({title:"table.copy_row_desc",icon:"copy",cmd:"mceTableCopyRow"});D.add({title:"table.paste_row_before_desc",icon:"paste",cmd:"mceTablePasteRowBefore"}).setDisabled(!m);D.add({title:"table.paste_row_after_desc",icon:"paste",cmd:"mceTablePasteRowAfter"}).setDisabled(!m);D=w.addMenu({title:"table.col"});D.add({title:"table.col_before_desc",icon:"col_before",cmd:"mceTableInsertColBefore"});D.add({title:"table.col_after_desc",icon:"col_after",cmd:"mceTableInsertColAfter"});D.add({title:"table.delete_col_desc",icon:"delete_col",cmd:"mceTableDeleteCol"})}else{w.add({title:"table.desc",icon:"table",cmd:"mceInsertTable"})}})}if(d.isWebKit){function v(C,N){var L=d.VK;var Q=N.keyCode;function O(Y,U,S){var T=Y?"previousSibling":"nextSibling";var Z=C.dom.getParent(U,"tr");var X=Z[T];if(X){z(C,U,X,Y);d.dom.Event.cancel(S);return true}else{var aa=C.dom.getParent(Z,"table");var W=Z.parentNode;var R=W.nodeName.toLowerCase();if(R==="tbody"||R===(Y?"tfoot":"thead")){var V=w(Y,aa,W,"tbody");if(V!==null){return K(Y,V,U,S)}}return M(Y,Z,T,aa,S)}}function w(V,T,U,X){var S=C.dom.select(">"+X,T);var R=S.indexOf(U);if(V&&R===0||!V&&R===S.length-1){return B(V,T)}else{if(R===-1){var W=U.tagName.toLowerCase()==="thead"?0:S.length-1;return S[W]}else{return S[R+(V?-1:1)]}}}function B(U,T){var S=U?"thead":"tfoot";var R=C.dom.select(">"+S,T);return R.length!==0?R[0]:null}function K(V,T,S,U){var R=J(T,V);R&&z(C,S,R,V);d.dom.Event.cancel(U);return true}function M(Y,U,R,X,W){var S=X[R];if(S){F(S);return true}else{var V=C.dom.getParent(X,"td,th");if(V){return O(Y,V,W)}else{var T=J(U,!Y);F(T);return d.dom.Event.cancel(W)}}}function J(S,R){var T=S&&S[R?"lastChild":"firstChild"];return T&&T.nodeName==="BR"?C.dom.getParent(T,"td,th"):T}function F(R){C.selection.setCursorLocation(R,0)}function A(){return Q==L.UP||Q==L.DOWN}function D(R){var T=R.selection.getNode();var S=R.dom.getParent(T,"tr");return S!==null}function P(S){var R=0;var T=S;while(T.previousSibling){T=T.previousSibling;R=R+a(T,"colspan")}return R}function E(T,R){var U=0;var S=0;e(T.children,function(V,W){U=U+a(V,"colspan");S=W;if(U>R){return false}});return S}function z(T,W,Y,V){var X=P(T.dom.getParent(W,"td,th"));var S=E(Y,X);var R=Y.childNodes[S];var U=J(R,V);F(U||R)}function H(R){var T=C.selection.getNode();var U=C.dom.getParent(T,"td,th");var S=C.dom.getParent(R,"td,th");return U&&U!==S&&I(U,S)}function I(S,R){return C.dom.getParent(S,"TABLE")===C.dom.getParent(R,"TABLE")}if(A()&&D(C)){var G=C.selection.getNode();setTimeout(function(){if(H(G)){O(!N.shiftKey&&Q===L.UP,G,N)}},0)}}r.onKeyDown.add(v)}if(!d.isIE){function s(){var w;for(w=r.getBody().lastChild;w&&w.nodeType==3&&!w.nodeValue.length;w=w.previousSibling){}if(w&&w.nodeName=="TABLE"){r.dom.add(r.getBody(),"p",null,'<br mce_bogus="1" />')}}if(d.isGecko){r.onKeyDown.add(function(z,B){var w,A,C=z.dom;if(B.keyCode==37||B.keyCode==38){w=z.selection.getRng();A=C.getParent(w.startContainer,"table");if(A&&z.getBody().firstChild==A){if(c(w,A)){w=C.createRng();w.setStartBefore(A);w.setEndBefore(A);z.selection.setRng(w);B.preventDefault()}}}})}r.onKeyUp.add(s);r.onSetContent.add(s);r.onVisualAid.add(s);r.onPreProcess.add(function(w,A){var z=A.node.lastChild;if(z&&z.childNodes.length==1&&z.firstChild.nodeName=="BR"){w.dom.remove(z)}});if(d.isGecko){r.onKeyDown.add(function(z,B){if(B.keyCode===d.VK.ENTER&&B.shiftKey){var A=z.selection.getRng().startContainer;var C=q.getParent(A,"td,th");if(C){var w=z.getDoc().createTextNode("\uFEFF");q.insertAfter(w,A)}}})}s();r.startContent=r.getContent({format:"raw"})}});e({mceTableSplitCells:function(n){n.split()},mceTableMergeCells:function(o){var p,q,n;n=g.dom.getParent(g.selection.getNode(),"th,td");if(n){p=n.rowSpan;q=n.colSpan}if(!g.dom.select("td.mceSelected,th.mceSelected").length){f.open({url:h+"/merge_cells.htm",width:240+parseInt(g.getLang("table.merge_cells_delta_width",0)),height:110+parseInt(g.getLang("table.merge_cells_delta_height",0)),inline:1},{rows:p,cols:q,onaction:function(r){o.merge(n,r.cols,r.rows)},plugin_url:h})}else{o.merge()}},mceTableInsertRowBefore:function(n){n.insertRow(true)},mceTableInsertRowAfter:function(n){n.insertRow()},mceTableInsertColBefore:function(n){n.insertCol(true)},mceTableInsertColAfter:function(n){n.insertCol()},mceTableDeleteCol:function(n){n.deleteCols()},mceTableDeleteRow:function(n){n.deleteRows()},mceTableCutRow:function(n){m=n.cutRows()},mceTableCopyRow:function(n){m=n.copyRows()},mceTablePasteRowBefore:function(n){n.pasteRows(m,true)},mceTablePasteRowAfter:function(n){n.pasteRows(m)},mceTableDelete:function(n){n.deleteTable()}},function(o,n){g.addCommand(n,function(){var p=l();if(p){o(p);g.execCommand("mceRepaint");k()}})});e({mceInsertTable:function(n){f.open({url:h+"/table.htm",width:400+parseInt(g.getLang("table.table_delta_width",0)),height:320+parseInt(g.getLang("table.table_delta_height",0)),inline:1},{plugin_url:h,action:n?n.action:0})},mceTableRowProps:function(){f.open({url:h+"/row.htm",width:400+parseInt(g.getLang("table.rowprops_delta_width",0)),height:295+parseInt(g.getLang("table.rowprops_delta_height",0)),inline:1},{plugin_url:h})},mceTableCellProps:function(){f.open({url:h+"/cell.htm",width:400+parseInt(g.getLang("table.cellprops_delta_width",0)),height:295+parseInt(g.getLang("table.cellprops_delta_height",0)),inline:1},{plugin_url:h})}},function(o,n){g.addCommand(n,function(p,q){o(q)})})}});d.PluginManager.add("table",d.plugins.TablePlugin)})(tinymce);