// levelselect.dust
(function(){dust.register("levelselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-").reference(ctx.get("id_suffix"),ctx,"h").write("-level\" title=\"Please select level\"><option value=\"20\">20</option><option value=\"19\">19</option><option value=\"18\">18</option><option value=\"17\">17</option><option value=\"16\">16</option><option value=\"15\">15</option><option value=\"14\">14</option><option value=\"13\">13</option><option value=\"12\">12</option><option value=\"11\">11</option><option value=\"10\">10</option><option value=\"9\">9</option><option value=\"8\">8</option><option value=\"7\">7</option><option value=\"6\">6</option><option value=\"5\">5</option><option value=\"4\">4</option><option value=\"3\">3</option><option value=\"2\">2</option><option value=\"1\">1</option></select>");}return body_0;})();