class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Digite Seu Nome Aqui....");
    this.input2 = createInput("").attribute("placeholder","Digite o Nº da Opção Correta..");
    this.button = createButton('Enviar');
    this.button2 = createButton('Reiniciar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.question.hide();
  }

  display(){
    this.title.html("Meu Questionário");
    this.title.position(350, 0);

    this.question.html("Pergunta: - O que é que está no meio do começo, no começo do meio, e no final do fim? " );
    this.question.position(150, 80);
    this.option1.html("1: A letra E " );
    this.option1.position(150, 100);
    this.option2.html("2: A letra M" );
    this.option2.position(150, 120);
    this.option3.html("3: A letra I" );
    this.option3.position(150, 140);
    this.option4.html("4: A letra O" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(360, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.question.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      this.title.show();
      this.input1.show();
      this.input2.show();
      this.button.show();
      this.option1.show();
      this.option2.show();
      this.option3.show();
      this.option4.show();
      this.question.show();
      var ref = database.ref("contestants")
      ref.remove();
    })
  }
}
