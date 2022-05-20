import test, { expect } from "@playwright/test"

test('set to fail on purpose', () => {
    let games = ['gears of war', 'couter strike', 'quake 3 arena']


    let [one, two, three] = games

    console.log(one)


    let [a1, ...more] = games


    expect.soft(a1, 'my soft assertion').toBe('gears of wa');

    expect(more).toContain('quak 4');

})


test('num comparison', () => {
    const random = Math.random() * 10;

    const random2 = Math.random() * 10;

    expect(random).toEqual(random2)
})