/*
  Title:Blogging Hardcore Accessibility
  Date:2013/02/06
  Author:Karl Oscar Weber
  Slug:blogging-hardcore-accesibility
*/

A recent project for Capital One has left me utterly perplexed as to how to best make a website accessible to the blind. The site: [Capital One Fiscal U](http://capitalone.mediarain.com), MUST be 100% compliant with the **WCAG2 AA** and **WCAG2 A** standard. I have never made a website 100% accessible before, nor I have been the primary developer on this site from the beginning. In fact I started the project a week before it was due to be launched. We are now at One week Late, and it could easily turn into two weeks. 

I've decided to share my dillemma and solutions with you.

**Ensure elements with multiple labels are rendered appropriately**

Radio Buttons are sometimes placed next to a label like so:

```
<input type="radio" /> <label>Male</label>
```

The proper way to build this:

```
<fieldset>
  <input type="radio" value="Are you a "/> <label>Male</label>
</fieldset>
```

Let me go and implement that... done.

No I need to set the tabindex for the login...

