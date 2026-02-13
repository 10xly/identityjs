# Bug History

```js
// Believe it or not, Identity.js has had many bugs before.
// As 10x engineers, we accepted that the simplest things
// are bound to have discovered bugs at some indeterminable
// point. This file (BUG-HISTORY.md) documents the history
// of bugs in the Identity.js ecosystem.
//
// Note: some of the histories of these bugs are just copy
// pasted from LoLite's identity function source code:
// http://github.com/10xly/lolite/blob/main/src/lib/identity.js
//
// Note: The bugs in this list are ordered from past to future, so
// to see the latest bug, you have to scroll to the bottom.
//
// -----------------------------------------------------------------------------------
//
// JANUARY 5, 2026 BUGS:
//
// On the date of January 5, 2026, a double-bug was patched across Identity.js,
// vValue, and vRetriever where decimals would coerce to integers. The primary source
// of the bug was the dependency @_immo/return which was an identity function that was
// heavily relied on but had a bug where it would run parseInt if the given input was
// a number. This bug was not found because to save our time and effort we would write
// our tests with AI (specifically Gemini) but AI didn't write comprehensive enough
// tests. The bug was discovered when we used a different AI (Copilot) to write more
// comprehensive tests. However, when this was patched it was discovered that the bug
// was still in vValue, but only happened 33% of the time for an unknown reason,
// however a sanity check has already been implemented in vRetriever, and vValue
// has been removed in Identity.js. So this should never happen, but due to recent bugs
// and AI not making comprehensive enough tests, there is a slim chance that this could
// still happen. We want LoLite to be as bug-free as possible, which is why we're
// implementing this. Our moral of the story is that AI sometimes doesn't write good
// enough tests.
//
// For more information, see these commits:
//
// https://github.com/10xly/vValue/commit/ff3ca00591ae8725f68587a5091ecb087a8be0d4
// https://github.com/10xly/vretriever/commit/86626b2741a9f03e19af7e3bae9b8f88e817220c
// https://github.com/10xly/identityjs/commit/3dfa642bfa9a35b791236f7bd620cb2564bc7780
//
// -----------------------------------------------------------------------------------
//
// JANUARY 6, 2026 BUGS:
//
// On January 6, 2026, another bug was discovered in vValue because the
// patch for the previous bug regarding floats made use of the package is-float, and
// its code coerces the value passed in (n) with +n. However, this creates an issue:
// If you pass a Symbol into this function, you get a TypeError from JS, that looks
// like this:
//
// Uncaught TypeError: Cannot convert a Symbol value to a number
//
// That's because JavaScript's stupidity doesn't let you type-coerce Symbols.
// Since the patch for vValue used is-float, if you tried to pass a Symbol into
// vValue, it would throw an error, so it would throw the error if you passed it
// into vRetriever (which depends on vValue), and for Identity.js (depends on
// vRetriever). This bug was once again not found during the implementation due
// to AI not writing good-enough tests (this time it was also partially Copilot).
// This bug was discovered when Copilot randomly decided to write better tests
// for the constant function in LoLite which includes the identity function.
// The issue was fixed by wrapping the call to isFloat with a try-catch statement.
// Moral of the story again: AI sometimes doesn't write good-enough tests.
// This is why we are thinking about creating our own AI that will ALWAYS write sufficient
// tests. If you find our tests to be insufficient, please report an issue - AI generated
// them, so it's AI's fault. As 10x Developers, we all have to accept these things just
// as side-effects of true Enterprise Development.
//
// For more information, see these commits:
//
// https://github.com/10xly/vValue/commit/f6f60798d98f52adefbda2b7f525d962752f29dd
// https://github.com/10xly/vretriever/commit/ff9fd93f7158167303b8fd870211a82c2b269c0b
// https://github.com/10xly/identityjs/commit/340cc78e6cd5e817d0b784d902f06afdd103769d
// https://github.com/10xly/identityjs/commit/a520a1d73c653adb41cc5fe317e1e7246b0f96bf
//
// -----------------------------------------------------------------------------------
//
// FEBRUARY 7, 2026 BUGS:
//
// On February 7, 2026, a bug was discovered in Identity.js where it would return 0
// when passed in -0. This was probably due to @negative-numbers/ identity not being
// implemented in @identity-js/number-identity and/or 0 being equal to -0 in JavaScript.
// This bug was fixed by adding a simple Object.is() check to the top of the base identity
// function.
//
// https://github.com/10xly/identityjs/commit/ed7b548ca8bbc72c18f3e2fd2130e23d64a0c7ab
//
// -----------------------------------------------------------------------------------
//
```
