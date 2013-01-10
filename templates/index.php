<section id="articles">
<?php
	foreach($articles as $article){
?>
    <div class="grater">
	  <article class="post">
      <div>
        <header>
          <p class="date"><?php  echo date($global['date.format'],strtotime($article['meta']['date']));  ?></p>
          <h3><a href="<?php echo $article['url']; ?>"><?php echo $article['meta']['title']; ?></a></h3>
        </header>

        <section class="content">
          <p>
            <?php echo substr(strip_tags($article['content']), 0,530); ?>...
          </p>
        </section>

        <div class="more"><a href="<?php echo $article['url']; ?>">more</a></div>
        <footer>

        </footer>
      </div>
    </article>
    </div><!-- End .grater -->

<?php	}  ?>
</section>