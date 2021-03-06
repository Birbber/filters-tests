/* global QUnit */

/* eslint-disable no-undef */

/**
 * Before doing the test, import test-extended-css-rules.txt to AdGuard
 */
window.addEventListener('DOMContentLoaded', () => {
    QUnit.test('1. Test simple :has', (assert) => {
        assert.equal(window.getComputedStyle(case1).display, 'none');
    });

    QUnit.test('2. Test simple :contains', (assert) => {
        assert.equal(window.getComputedStyle(case2).display, 'none');
    });

    QUnit.test('3. Test simple :matches-css', (assert) => {
        assert.equal(window.getComputedStyle(case3).display, 'none');
    });

    QUnit.test('4. Test simple :matches-css-after', (assert) => {
        assert.equal(window.getComputedStyle(case4).display, 'none');
    });

    QUnit.test('5. Test simple :matches-css-before', (assert) => {
        assert.equal(window.getComputedStyle(case5).display, 'none');
    });

    QUnit.test('6. Test simple :has-text', (assert) => {
        assert.equal(window.getComputedStyle(case6).display, 'none');
    });

    QUnit.test('7. Test simple :-abp-has', (assert) => {
        assert.equal(window.getComputedStyle(case7).display, 'none');
    });

    QUnit.test('8. Test simple :-abp-contains', (assert) => {
        assert.equal(window.getComputedStyle(case8).display, 'none');
    });

    QUnit.test('9. Test simple regex :contains', (assert) => {
        assert.equal(window.getComputedStyle(case9).display, 'none');
    });

    QUnit.test('10, Test simple regex :matches-css', (assert) => {
        assert.equal(window.getComputedStyle(case10).display, 'none');
    });

    QUnit.test('11. Test simple regex :matches-css-after', (assert) => {
        assert.equal(window.getComputedStyle(case11).display, 'none');
    });

    QUnit.test('12. Test simple regex :matches-css-before', (assert) => {
        assert.equal(window.getComputedStyle(case12).display, 'none');
    });

    QUnit.test('13. Test simple selector followed by descendant combinator', (assert) => {
        assert.equal(window.getComputedStyle(case13).display, 'none');
    });

    QUnit.test('14. Test simple selector followed by children combinator', (assert) => {
        assert.equal(window.getComputedStyle(case14).display, 'none');
    });

    QUnit.test('15. Test simple selector followed by adjacent sibling combinator', (assert) => {
        assert.equal(window.getComputedStyle(case15).display, 'none');
    });

    QUnit.test('16. Test simple selector followed by general sibling combinator', (assert) => {
        assert.equal(window.getComputedStyle(case16).display, 'none');
    });

    QUnit.test('17. Test un-tokenizable complex selector', (assert) => {
        assert.equal(window.getComputedStyle(case17).display, 'none');
    });

    QUnit.test('18. Test xpath', (assert) => {
        assert.equal(window.getComputedStyle(case18).display, 'none');
    });

    QUnit.test('19. Test nth-ancestor', (assert) => {
        assert.equal(window.getComputedStyle(case19).display, 'none');
    });

    QUnit.test('20. Test upward + selector', (assert) => {
        assert.equal(window.getComputedStyle(case20).display, 'none');
    });

    QUnit.test('21. Test upward + number', (assert) => {
        assert.equal(window.getComputedStyle(case21).display, 'none');
    });

    QUnit.test('22. Test rules injection into iframe with localsource', (assert) => {
        const frame = document.querySelector('#case22 > #frame1');
        const innerDoc = frame.contentDocument || frame.contentWindow.document;
        assert.ok(innerDoc.querySelector('#inframe1').style.display === 'none', 'Extended CSS rules should work inside of iframes with local source');
        // clean up test frame
        frame.style.cssText = 'display:none!important;';
    });

    QUnit.test('23. Multiple regex :contains', (assert) => {
        const baseElem = document.querySelector('#case23');
        const testElems = baseElem.querySelectorAll('.case23');
        assert.equal(testElems.length, 5);
        testElems.forEach((el) => {
            assert.equal(window.getComputedStyle(el).display, 'none');
        });
    });

    QUnit.test('24. Test matches-attr', (assert) => {
        const case24 = document.querySelector('#case24 > #test-matches-attr-match');
        assert.equal(window.getComputedStyle(case24).display, 'none');
    });

    QUnit.test('25. Test matches-property', (assert) => {
        const case25 = document.querySelector('#case25 > #test-matches-property-match');
        assert.equal(window.getComputedStyle(case25).display, 'none');
    });

    QUnit.test('26. Test remove pseudo-class', (assert) => {
        const target = document.querySelector('#case26');
        assert.notOk(target);
    });

    QUnit.test('27. Test remove pseudo-property', (assert) => {
        const target = document.querySelector('#case27');
        assert.notOk(target);
    });

    QUnit.test('28. Test :is() pseudo-class', (assert) => {
        const case28 = document.querySelector('#case28 > #test-is-any-matches3');
        assert.equal(window.getComputedStyle(case28).display, 'none');
    });
});
