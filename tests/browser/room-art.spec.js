import {test,expect} from '@playwright/test';
test('all three room backgrounds and library flying books load',async({page})=>{
 await page.goto('/');
 for(const [name,bg] of [['Forbidden Library','forbidden-library-background.png'],['Gallery of Shadows','gallery-background.png'],['Clock Tower','clock-tower-background.png']]){
  await page.getByRole('button',{name:`Enter ${name}`,exact:true}).click();
  await expect(page.locator('.scene-background')).toHaveAttribute('src',new RegExp(bg));
  await expect(page.locator('.room-heading h1')).toContainText(name);
  await page.getByRole('button',{name:/BACK TO HALL/}).click();
 }
 await page.getByRole('button',{name:'Enter Forbidden Library',exact:true}).click();
 await expect(page.locator('.floating-book')).toHaveCount(4);
 await expect.poll(()=>page.locator('.floating-book[src]').evaluateAll(xs=>xs.filter(x=>x.complete&&x.naturalWidth).length)).toBe(4);
});
