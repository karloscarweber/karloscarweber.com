<section id="articles">
<?php
	foreach($articles as $article){
?>
    <div class="grater">
	  <article class="post">
      <div>
        <header>
          <h1><a href="<?php echo $article['url']; ?>"><?php echo $article['meta']['title']; ?></a></h1>
        </header>

        <section class="content">
          <p>
            <?php echo substr(strip_tags($article['content']), 0,150); ?>...
          </p>
        </section>

        <div class="more"><a href="<?php echo $article['url']; ?>">read on &raquo;</a></div>

        <footer>
          <p class="date"><?php  echo date($global['date.format'],strtotime($article['meta']['date']));  ?></p>
        </footer>
      </div>
    </article>
    </div><!-- End .grater -->
    <br>
    <hr>
    <br>
  <?php
	}
  ?>
</section>
