function BuildSidebarNode(id,rect)
{
  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.template

  this.cache = null;

  this.answer = function(q)
  {    
    if(!q.result){
      return "<h1>The SITE_TITLE Services Desk</h1><h2>{(Home)}</h2>".to_curlic()
    }

    var html = ""
    for(id in q.result.links){
      html += `<a href='${q.result.links[id]}' target='_blank'>${id}</a>`
    }

    return `<h1>${q.result.bref.to_curlic()}</h1>
    <h2>
      <a onclick="Ø('query').bang('${q.result.unde}')">${q.result.unde}</a><br />
      ${q.result.span.from && q.result.span.to ? q.result.span.from+'—'+q.result.span.to : ''}
      <div class='links'>${html}</div>
    </h2>`
  }
}