function Clock()
{
  this.time = function()
  {
    var d = new Date();
    return d;
  }

  this.toString = function()
  {
    var t = this.time();
    return t.getHours()+":"+t.getMinutes();
  }
}

Date.prototype.clock = function()
{
  return new Clock();
}