{
  "title":"The Fizz Buzz Problem",
  "date":"14-01-2013",
  "author":"Karl Oscar Weber",
  "slug":"the-fizz-buzz-problem"
}

Today I was asked to "white board" fizz buzz while in an interview. Fizz Buzz is a simple problem that prints 1 to 100. For every number that is divisible by 3, print fizz, for every number divisible by 5, print buzz, and for the numbers that are divisible by both, print fizz buzz. I have never solved fizz buzz before, so it was hard. I had to ask for help: "Isn't there a function that divides a number and determines if it's a decimal or a whol number?" I asked. "Use the modulus operator" The CTO responded. Obviously I knew what had to be done to solve the problem instantly, I just didn't know which functions / operators to use to do so. A big fail on my part. The modulus operator returns the remainder if there is a remainder, or a 0 if there isn't.

Here is the code that I used for Fizz Buzz below:

<!-- Begin Code Snippet -->
<pre><code data-language="php">

for ($i = 1; $i < 101 ; $i++) {

  if (!($i % 3) && !($i % 5)) {
      echo "$i fizz buzz <br>";
  } else if(!($i % 3)) {
      echo "$i fizz <br>";
  } else if (!($i % 5)) {
      echo "$i buzz <br>";
  } else {
      echo $i;
      echo "<br>";
  }
}

</code></pre>
<!-- End Code Snippet-->

Lesson learned. Know your control statements and operators.

Sincerely, 
Karl Oscar Weber