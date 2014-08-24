SinglePageApp1
==============

Example single-page app with jQuery and Knockout

I wrote this while experimenting with ways of making pages more modular.  It doesn't have to be used for a SPA though.
You can lazy-load modals or other content that is not immediately viewable.  Even though the javascript is in external files
it is difficult to debug because it is loaded and executed by jQuery anonymously.  I think before using this in a
production environment i would experiement with $.getScript to load the scripts as external files.

Anyways, there are three major sections: header, navigation, and main.  All three are modules.  Navigation swaps out the main
module with whatever "link" you click.  Nothing is currently cached so you can change a module, click a "link", and see the
change without having to refresh the whole page.  Nifty : )
