function BuildSidebarNode(id,rect)
{
  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.template

  this.cache = null;

  this.answer = function(q)
  {    
    if(!q.result){
<<<<<<< HEAD
      return "<h1>The SITE_TITLE Services Desk</h1><h2>{(Home)}</h2>".to_curlic()
=======
      return "<h1>The {(Nataniev)} Services Desk</h1><h2>{(Home)}</h2>".to_curlic()
>>>>>>> master
    }

    var html = ""
    for(id in q.result.links){
      html += `<a href='${q.result.links[id]}' target='_blank'>${id}</a>`
    }

    <h2>
      <div class='links'>${html}</div>
    </h2>`
  }
}