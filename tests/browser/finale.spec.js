import {test,expect} from '@playwright/test';
test('final scenes and dialogs fit landscape viewports; Boo renders',async({page})=>{
 await page.goto('/');
 for(const [width,height] of [[1920,1080],[1366,768],[1280,720],[1024,768],[844,390]]){
  await page.setViewportSize({width,height});
  for(const scene of ['library','gates','chest','reward']){
   await page.evaluate(scene=>localStorage.setItem('boos-academy-v1',JSON.stringify({version:1,scene,progress:{library:3,gallery:3,tower:3},inserted:scene==='gates'?[]:['library','gallery','tower'],card:scene==='reward'?'B3-123456':null,mistakes:{},sound:false})),scene);await page.reload();
   await expect.poll(()=>page.evaluate(()=>[...document.querySelectorAll('button,a')].filter(e=>e.checkVisibility()&&!e.disabled&&!e.closest('[inert]')).flatMap(e=>{const r=e.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return r.left<0||r.top<0||r.right>innerWidth+.5||r.bottom>innerHeight+.5||!e.contains(hit)?[e.textContent]:[];}))).toEqual([]);
   await expect.poll(()=>page.locator('img').evaluateAll(images=>images.every(img=>img.complete&&img.naturalWidth>0))).toBe(true);
   if(width===1366)await page.screenshot({path:`test-results/final-${scene}.png`});
  }
 }
 await page.setViewportSize({width:1366,height:768});await page.getByRole('button',{name:'BACK TO ACADEMY'}).click();await page.screenshot({path:'test-results/hall-fixed.png'});const ids=await page.locator('linearGradient').evaluateAll(es=>es.map(e=>e.id));expect(new Set(ids).size).toBe(ids.length);
});
