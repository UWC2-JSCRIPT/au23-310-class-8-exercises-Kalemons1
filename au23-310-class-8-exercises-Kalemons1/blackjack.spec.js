describe('Tests for dealerShouldDraw', () => {
    it('should calculate if dealer score is >= to 16 and then draw if true and hold if false', () => {
        const dealerHand = [
            {displayVal: 'ten', val: 10},
            {displayVal: 'nine', val: 9}
        ];
        const result = dealerShouldDraw(dealerHand);

        expect(result).toBe(false); 

    });
    it('should return true when dealer score is 13 with a 2, 4, 2, 5', () => {
        const dealerHand = [
            { displayVal: 'two', val: 2 },
            { displayVal: 'four', val: 4 },
            { displayVal: 'two', val: 2 },
            { displayVal: 'five', val: 5 }
        ];

        const result = dealerShouldDraw(dealerHand);

        expect(result).toBe(true);
    });
    

});

