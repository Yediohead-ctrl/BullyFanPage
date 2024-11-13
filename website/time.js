var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const formatTime=date=>`${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} ${date.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).split(" ")[0]+":"+date.getMilliseconds().toString().padStart(2,"0").slice(0,2)}`;function replaceTime(){const times=document.getElementsByClassName("time");for(let i=0;i<times.length;i++)times[i].textContent=formatTime(new Date)}replaceTime(),setInterval(replaceTime,50);
//# sourceMappingURL=/cdn/shop/t/68/assets/time.js.map?v=11454360075555554221717121236


}