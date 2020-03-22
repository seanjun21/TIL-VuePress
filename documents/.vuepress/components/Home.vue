<template>
  <div>
    <div class="titleContainer">
      <h1>
        Development
        <br />Log
      </h1>

      <div class="infoContainer">
        <div class="name">Sean's DEVL</div>
        <ul>
          <li>
            <a href="https://github.com/seanjun21/">GitHub</a>
          </li>
          <li>
            <a href="https://dev.to/seanjun21/">Blog</a>
          </li>
          <li>
            <a href="https://seanjun.netlify.com/">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

.infoContainer {
  text-align: right;
}
h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid #ffd816;
  word-break: keep-all;
  font-size: 5rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>
