function BuildSidebarNode(id,rect)
{
  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.template

  this.cache = null;

  this.answer = function(q)
  {    
    if(!q.result){
<<<<<<< HEAD:scripts/nodes/assoc/build.sidebar.js
      return "<h1>The SITE_TITLE Services Desk</h1><h2>{{Home}}</h2>".to_markup()
=======
      return "<h1>The {{Nataniev}} Services Desk</h1><h2>{(Home)}</h2>".to_curlic()
>>>>>>> master:scripts/riven/nodes/assoc/build.sidebar.js
    }
    var html = ""
    for(id in q.result.links){
      html += `<a href='${q.result.links[id]}' target='_blank'>${id}</a>`
    }

    return `<h1>${q.result.bref()}</h1>
    <h2>
      <a onclick="Ø('query').bang('${q.result.unde()}')">${q.result.unde()}</a><br />
      ${q.result.logs.length >= 10 ? q.result.logs[q.result.logs.length-1].time+'—'+q.result.logs[0].time : ''}
      <div class='links'>${html}</div>
    </h2>`
  }
}