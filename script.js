
 const text = "Com uma voz marcante e uma presença única, Briisa é uma cantora angolana que vem conquistando corações com seu talento, autenticidade e atitude. Suas músicas misturam sonoridades modernas com a essência da cultura angolana, criando uma identidade sonora própria. Mais do que uma artista, Briisa é um movimento — uma força feminina que inspira outras mulheres a se expressarem e acreditarem nos seus sonhos. Seja nos palcos ou nas plataformas digitais, ela entrega emoção, estilo e verdade em cada verso. Prepare-se para sentir, cantar e viver a experiência Briisa.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();



  



