function HomeTemplate(id,rect,...params)
{
  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.element
  
  this.answer = function(q)
  {
    if(!q.result){ return this.signal('missing').answer(q) }

    var html = ""

    html += q.result.long(q.tables);
    html += q.result.has_tag("diary") ? this._diary(q) : ''
    html += q.result.has_tag("index") ? this._index(q) : ''

    return html
  }

  this._diary = function(q)
  {
    var html = ""
    var term = q.result;
    var skip = term.featured_log

    for(id in term.diaries){
      var log = term.diaries[id]
      if(skip && log.photo == skip.photo){ continue; }
      html += `<img src='media/diary/${log.photo}.jpg'/>`
    }

    return html
  }

  this._index = function(q)
  {
    var html = ""
    var term = q.result;

    for(id in term.children){
      var child = term.children[id];
      html += `
      ${child.featured_log ? `<a onclick='Ø("query").bang("${child.name}")'><img src="media/diary/${child.featured_log.photo}.jpg"/></a><hs>${child.bref().to_markup()}</hs>` : `<h2>${child.name.capitalize()}</h2><hs>${child.bref()}</hs>`.to_markup()}
      ${child.long(q.tables)}`
    }
    return html
  }
}
/*  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.element
  
  this.answer = function(q)
  {
    var html = ""
    var projects = {};

    for(id in q.tables.horaire){
      var log = q.tables.horaire[id];
      if(!log.term){ continue; }
      if(log.time.offset > 0){ continue; }
      if(!projects[log.term]){ projects[log.term] = {name:log.term,to:log.time.toString(),count:0}}
      projects[log.term].from = log.time.toString();
      projects[log.term].count += 1;
    }

    for(id in projects){
      var project = projects[id];
      if(project.count < 10){ continue; }
      html += `<ln>{{${project.name.capitalize()}}} ${project.from != project.to ? project.from+"—"+project.to : project.from}</ln>`.to_markup();
    }
    return `<list class='tidy'>${html}</list>`;
  }
}*/