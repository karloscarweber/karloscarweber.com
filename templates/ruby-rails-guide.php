<?php include("header.php"); ?>

    <div class="container">

      <div class="grater">
      </div>

      <div class="content">
        <article class="post">
          <header>
            <h1>Ruby and Rails:</h1>
          </header>

          <section class="content">

            <h2>Some basic Methods:</h2>

<p>Here are some methods that can be used on models</p>

<pre><code data-language="ruby">
This is some ruby code.

// Creates a new Model
x = Model.create
x = Model.new
x.save

// finds the Model with an id of 83
m = Model.find(83)

// get information out of something
j = Model.find(4)
j.info[:name]

// updates a models info
f = Model.find(3)
f.info = "new info"

// Destroys a model
d = Model.find(47)
d.destroy

</code></pre>

<p>arrays in ruby i guess</p>

<pre><code data-language="ruby">
//a specific error in an array.

t.errors(:specificerror)

</code></pre>



<p>This is how you define a class in ruby:</p>

<pre><code data-language="ruby">

class Zombie < ActiveRecord::Base

  validates_presence_of :name
  validates_uniqueness_of :name

// or

  validates(:name, :presence => true, :uniqueness => true)

end



</code></pre>




          </section>

        </article>

          <br>
          <hr>
          <br>      

      </div><!-- End .content -->

<?php include("footer.php"); ?>

    </div> <!-- End .container -->
  </body>
</html>