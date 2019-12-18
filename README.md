# DDD19
Key links and material for my animation session at [DDD 2019 conference][ddd] in Perth, Western Australia. Video of the talk now [online][ytddd].

If you just followed a link to this repository, see the [presentation slides as markdown](./slides.md).

You can also **preview the rendered presentation** [direct from github][prev] but note that won't play the embedded Lottie animations (on slides such as _Why Animate? - Designers_). The way reveal.js works, you have to be serving from a (local?) webserver to see those

There will possibly be a bunch of other relevant pages linked here which don't appear in my 20 minute session. Bookmark this site as it will continue to be updated over the next few weeks.

Longer form writing by [Andy Dent on Medium][adMedium] includes an [initial article on Supernova][sn1] and will have more based on this conference material, along with a [Touchgram walkthrough showing the UI generated][tgcanva].


## MenuAnimation Sample Art and Code
The [sample included here](./menuAnimationDemo/) and shown in the video from the presentation shows the path from using Sketch for a design, importing into Supernova Studio (v7) and includes all the generated code.

## Authoring Tools used
I am using a Markdown approach and based on a [Hacker news thread][hn] decided to try using [markdeck][md] which augments `reveal.js` with a bunch of other goodies. This also embeds the [Lottie Web Player][lottieWeb] enhanced by [Lottie Files][lottiefiles].

I started considering the highly-recommended [DeckSet app for Mac][deckset] but it lacks HTML-based presentation.

## Windows notes
I didn't have time to go through the labyrinth of getting markdeck working on Windows, which removed the temptation to make last-hour changes. To serve it locally and see the Lottie animations, `python -m SimpleHTTPServer` did the trick.

## Other Attributions

### Lottie Files used:

As per their [CC license][lottieCC]: 

- [Menu Volver][926] by Luisa Fernanda Bolaños Beltrán
- [Jump][8103] by Luisa Fernanda Bolaños Beltrán
- [Checked loading][961] by Luisa Fernanda Bolaños Beltrán

[ddd]: https://dddperth.com/
[ytddd]: https://www.youtube.com/watch?v=D1WSsEfkI0k
[tgcanva]: https://medium.com/touchgram/birthday-card-via-canva-touchgram-c69d9dfa8b8e
[md]: https://github.com/arnehilmann/markdeck
[hn]: https://news.ycombinator.com/item?id=18863691
[deckset]: https://www.deckset.com/
[prev]: http://htmlpreview.github.io/?https://github.com/AndyDentFree/DDD19/blob/master/deck/index.html#/anyone-can-animate
[926]: https://lottiefiles.com/926-menu-volver
[8103]: https://lottiefiles.com/8103-jump
[961]: https://lottiefiles.com/961-checked-loading
[lottieCC]: https://lottiefiles.com/page/license
[adMedium]: https://medium.com/@andydentperth
[sn1]: https://uxdesign.cc/supernova-exploding-design-tool-myths-5135d9f6e2fe
[lottieWeb]: https://lottiefiles.com/web-player
[lottiefiles]: https://lottiefiles.com/
