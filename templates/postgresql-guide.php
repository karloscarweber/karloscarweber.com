<?php include("header.php"); ?>

<div class="container">

<div class="grater">
  &nbsp; <br>
  &nbsp; <br>
  &nbsp; <br>
</div>

<div class="sidebar postgre">
  <h4>Postgre Sql</h4>

  <p class="heading"><a href="#thebasics">basics</a></p>
  <ul>
    <li><a href="#heading1">heading 1</a></li>
  </ul>

  <p class="heading"><a href="#links">Links</a></p>
  <ul>
    <li><a href="#links-officialdocumentation">Official Documentation</a></li>
  </ul>

  <p class="heading"><a href="#movingfrommysql">Moving From MySQL</a></p>
  <ul>
    <li><a href="#movingfrommysql-autoincrement">Autoincrement</a></li>
    <li><a href="#movingfrommysql-CakePHPSetup">CakePHP on Heroku with Postgre</a></li>


  </ul>

</div>

<div class="content">

  <div class="grater-container">

    <h3>Guide to PostgreSQL</h3>

    <a id="thebasics" href="#thebasics"><h3>The Basics</h3></a>

    <p>This guide is mostly just for myself. I like to keep snippets of code and explanations close by for technologies I use often, but not everyday. </p>

    <p>Code Snippets look like the following:</p>

<!-- Begin Code Snippet -->
<pre><code data-language="generic">
echo "hello world"; 

</code></pre>
<!-- End Code Snippet -->

    <p>headings look like this: </p>

    <a id="heading1" href="#heading1"><h3>Heading</h3></a>

    <p>Headings are hyperlinked hardcore. sometimes we want to add emphasis to something, emphasis looks like this: <em>emphasis</em>. <strong>Also we might bold things that are really important</strong>.</p>

  </div>

<hr>
<br>
<br>

  <!-- Begine new section. -->
  <div class="grater-container">

    <a id="links" href="#links"><h3>Links with helpful resources</h3></a>

    <a id="links-officialdocumentation" href="http://www.postgresql.org/docs/9.2/static/index.html" target="_blank"><h4>PostgreSQL 9.2.2 Documentation</h4></a>

    <p>The Postgre Documentation is pretty excellent. There are a lot of resources here.</p>

  </div>

<hr>
<br>
<br>

  <!-- Begine new section. -->
  <div class="grater-container">

    <a id="movingfrommysql" href="#movingfrommysql"><h3>Moving from MySQL</h3></a>

    <a id="movingfrommysql-autoincrement" href="#movingfrommysql-autoincrement"><h4>Auto Increment in PostgreSQL</h4></a>

    <p>Autoincrementation in Postgre is different than in MySQL. There is a specific Data type of <em>serial</em> that is used. You can view the official documentation here: <a href="http://www.postgresql.org/docs/9.2/static/datatype-numeric.html" target="_blank">PostgreSQL Data Types</a>. So the following MySQL code here:</p>

<!-- Begin Code Snippet -->
<pre><code data-language="generic">
CREATE TABLE posts (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50),
body TEXT,
created DATETIME DEFAULT NULL,
modified DATETIME DEFAULT NULL
);  
</code></pre>
<!-- End Code Snippet -->

    <p>Would be look like the following in PostgreSQL:</p>

<!-- Begin Code Snippet -->
<pre><code data-language="generic">
CREATE TABLE posts (
  id SERIAL PRIMARY KEY, 
  title VARCHAR(50),
  body TEXT,
  created TIMESTAMP DEFAULT NULL,
  modified TIMESTAMP DEFAULT NULL
);  
</code></pre>
<!-- End Code Snippet -->

    <br>

    <a id="movingfrommysql-CakePHPSetup" href="#movingfrommysql-CakePHPSetup"><h4>CakePHP on Heroku with Postgre</h4></a>

    <p>The best way that I've found to getting CakePHP running on Heroku is here: <em><a href="http://www.jisaacks.com/setup-cakephp-app-on-heroku
    ">setup cakephp app on heroku</a></em>.</p>

  </div>

<hr>
<br>
<br>


</div><!-- End .content -->

<?php include("footer.php"); ?>

</div> <!-- End .container -->
</body>
</html>