const Mars = require('../Mars');

const SIZE = 5;

describe('Mars ', () => {
    let mars;
    const logSpy = jest.spyOn(global.console, 'log');
    const warnSpy = jest.spyOn(global.console, 'warn');

    beforeEach(() => {
        mars = new Mars(SIZE, SIZE + 1);
        logSpy.mockClear();
        warnSpy.mockClear();
    });

    it('initializes', () => {
        mars.describeRovers();

        expect(mars.getWidth()).toBe(SIZE);
        expect(mars.getHeight()).toBe(SIZE + 1);
        expect(logSpy).not.toBeCalled();
        expect(warnSpy).not.toBeCalled();
    });

    it('initializes defaults on invalid input', () => {
        mars = new Mars('berlin', 'sofia');

        expect(mars.getWidth()).toBe(10);
        expect(mars.getHeight()).toBe(10);
        expect(warnSpy).toHaveBeenCalled();
    });

    it('adds and describes rovers', () => {
        mars.addRover(1, 1, 'N');
        mars.describeRovers();

        expect(logSpy).toHaveBeenCalledWith('1 1 N');
    });

    it('handles the tech assessment test scenario', () => {
        mars = new Mars(SIZE, SIZE);
        const opportunity = mars.addRover(1, 2, 'N');
        const curiosity = mars.addRover(3, 3, 'E');

        'LMLMLMLMM'.split('').forEach(opportunity.handleCommand);
        'MMRMMRMRRM'.split('').forEach(curiosity.handleCommand);
        mars.describeRovers();

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('1 3 N');
        expect(logSpy).toHaveBeenCalledWith('5 1 E');
    });
});
