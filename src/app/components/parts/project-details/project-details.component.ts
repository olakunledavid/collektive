import { AuthService } from './../../../shared/services/auth.service';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IChat, IProject } from 'src/app/shared/interfaces/ipage-data';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit, AfterViewChecked {
  @Input() projectId: number;
  project: IProject = {
    title: 'Project Title',
    collaborators: [
      { name: 'Payne', approvalDate: new Date(), requestDate: new Date() },
      { name: 'Josh', approvalDate: new Date(), requestDate: new Date() },
    ],
    createdDate: new Date(),
    owner: 'David',
    tags: ['Herding', 'Microscopic Induction'],
    text: 'This is an introduction to the conflict between Herders and Farmers in the local district of ...',
  };

  editorConfig: AngularEditorConfig = {
    editable: true,
    outline: false,
    spellcheck: true,
    height: '0',
    minHeight: '320px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    // placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    // customClasses: [
    //   {
    //     name: 'quote',
    //     class: 'quote',
    //   },
    //   {
    //     name: 'redText',
    //     class: 'redText',
    //   },
    //   {
    //     name: 'titleText',
    //     class: 'titleText',
    //     tag: 'h1',
    //   },
    // ],
    // uploadUrl: 'assets/img',
    // upload: (file: File) => { },
    // uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'bottom',
    toolbarHiddenButtons: [['customClasses'], ['insertImage'], ['insertVideo']],
    // toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };

  htmlContent = `<h1 style="background: transparent none repeat scroll 0% 0%; margin-top: 0pt; margin-bottom: 0pt; font-weight: normal;" align="left"><font face="Calibri" color="#1f48dd"><strong style="background: transparent none repeat scroll 0% 0%; margin-top: 0pt; margin-bottom: 0pt;"><span style="background: transparent none repeat scroll 0% 0%; margin-top: 0pt; margin-bottom: 0pt;" data-preserver-spaces="true">Chapter 1</span></strong></font></h1><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">In the beginning, the earth was created, Adam was in it and the enemy was within the walled city. The potential for chaos existed within the set order and to the serpent, the order remains threatening. It's no wonder he will do that which he must, lie cheat, steal, to see his version of order take place. The preferred outcome was his and his alone and Adam could go to hell for all he cared, After all, power is being at the top of the hierarchy and handing down that which the rest must be subject to, or is it? The trickery he must perform is not simply against Adam, the God-son whom God had so richly favored, his jealousy and rage though hidden, was perhaps in the same proportion as the love God had for Adam. The walled garden however presented ample opportunity to strike back at this treacherous hand he had been dealt. He was kicked out of heaven, the protected city was Order, it kept out the rest of the harsh realities and how best to strike back at God but by plucking out the apple of his eyes, Adam and Eve.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="background: transparent none repeat scroll 0% 0%; margin-top: 0pt; margin-bottom: 0pt;"><font color="#dd281f"><span style="background: transparent none repeat scroll 0% 0%; margin-top: 0pt; margin-bottom: 0pt;" data-preserver-spaces="true">Order already made protects the new entrants from understanding the cost of it. Life is free, full, and joyful, nothing to worry about or fear, nothing to hide from, not the past, present nor the future. None of that was apparent to the over-protected children of God. It seems they were awake but without a capacity to think, they had not doubt nor could they recognize trickery when it presented itself. One wonders the reason why the devil approached the woman instead of the man. Could it be that God's commandment to Adam preceding Eve's creation meant the woman was the weaker target? Adam would likely have remembered God's warning not to eat of the fruit at the center of the garden as opposed to the woman who had no fore-warning and considering that all she knew was good, it is likely she judged satan's deceit as good as she truly did.</span></font></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><blockquote><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Regardless of what made Eve the more vulnerable target, Satan's deception of Eve was strategic after all, she, being the closest to Adam after God, had a better chance of convincing him than he did. Thus he etched his plan to enslave the God-child. Should his plan work, he would have rule over these soon to be God-forsaken creatures, his plan would see him have dominion, reversing the order which had been created that man should have dominion over everything God had made, a feat for which he would need the cooperation of his preys. The serpent succeeded, Adam chose the love of a woman over God, or was it knowledge he chose?</span></p></blockquote><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><strike><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">His plan worked. Adam was stripped of title, position and inheritance, sonship lost and enslaved to a tyrannical master, his corruption engendered by a lack of awareness and obedience was complete, he gained sight of evil, but he lost something greater, his heart. he grew bitter and cold over the years following, producing more of the same in his seeds. Perhaps it was his annoyance at God for allowing this catastrophe to befall him, after all, he was God, the all-knowing and all-sufficient, he could do and undo, he created the devil in the first place, and perhaps was the mastermind behind this whole thing. It could also be that the first thing he sees with his double eye was the deceit of the serpent, thus becoming embittered just as God rightly so declared the enmity between his seed and the devil.</span></strike></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Now he had to work, not only did he have to work, but he also suffered at it. The ground was hard, his sweat was great and the yield little, his sons were subject to death, famine, and lack, a state that was not existent in his previous life. Perhaps if he hadn't known the good life, his terrible contempt of the new norm wouldn't be so great, but knowing that life was and could be better but simply out of reach was suffering too great to bear. His wife had to labor in childbirth and she cursed him for her pain, and to make matters worse, the serpent was there to bite his son's foot, but it was not simply one serpent anymore, because according to the law of God, and the law of growth, things multiply. Cut one head and others grow in its place, so no matter the number of serpents Adam and sons crushed, others just grew in its stead.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true"></span></p><hr><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">This was not dominion, had God's word been broken? Did God not give Adam dominion? it is doubtful Adam had the capacity for a critical analysis of his predicament to determine God's hand in it. His hands were probably still full from having to fight for daily survival. Therefore it would stand to reason that while everything worked in the domain of order and all he had to do was take stock and manage, he had taken for granted the system that made everything work, thus, while he still had dominion, he had more work to do in exercising it and in a short period, began to forget who he was. His identity and sonship lost, now reduced to being beggarly, to a state of blindness as evident in the ensuing chaos of his seed.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">The devil had a good laugh, Adam was his, the son of God had fallen, the crown on his head lost in the muck and mire, and in all of this, it is hard not to wonder how or what God was feeling. Was he that angry at Adam for eating of the fruit, that of the knowledge of good and evil? Was God so averse to Adam becoming as he? or if indeed this was God's plan all along, why use the devil to perform this treacherous act? What could God possibly be trying to teach Adam? Is it possible that just as Adam must have felt the pain of separation, God felt it as well? What was that, a sacrifice? It would appear the act of sacrifice has since been started by God, first with Adam, then with Jesus Christ, thus it is not surprising that God would demand and find pleasure in asking and receiving a good sacrifice of that which one holds dear, of Abraham, Cain and Abel and with Noah among others.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">It is a wonder if the conflict sustained by Adam and his seed was not meant to teach good sense, to give man the capacity for thought, to quit being simple-minded and of the heart only, but to apply thought in wisdom, knowledge and understanding, to truly become gods, however, the road appears treacherous because just as man gained sight, he lost the right heart, his attitude deteriorated. it is no wonder then that David prays, asking for the creation of a new heart, renewing God's spirit within. It appears the head and the heart must work in tandem to produce good fruits. The woman which may be likened to the heart was the entry point, therefore everyone born of a woman and a man carried within a seed of corruption.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">The fate of man was doomed. Coming from a place of original death, the corruption of the heart seems inevitable, the tendency towards evil constant, seemingly irredeemable, that is until the savior was sent. Now, this savior must work on the heart that was once broken. The means of employ, belief. My people are destroyed for a lack of knowledge God says, and now this son he sent comes to show the path of life and chooses the hardest of means, faith, hope, love. The heart must compete against the intellect enshrined in the law, in logic, false order. His life must be sacrificed if that is what causes the now hardened heart of man to thaw.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">All of this seems quite true when the nature of man is considered, he speaks and acts that which he believes and usually at a subconscious level. He acts in strange ways when he knows not what he believes and it would be unsurprising to discover the majority of lost souls comprise those unaware and unseeing of what they believe, simply acting according to the dictates of their cold darkened hearts.  People are what they believe, thus it would make sense that the heart is what Jesus Christ targets in his speech and actions, not condemning the use of the head, but gives a recommendation of being wise as the serpent but gentle as a dove.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">This earns Jesus Christ a position at the right hand of God, his act of sacrifice, his demonstration of love and obedience earns him the highest rewards. He is given rulership over all the world, his heart of gold earning him a right to rulership. He demonstrates the truth that a crown is fit for the head, but a King is chosen of the heart. It looks to me that the road back to God and the walled garden of habitable order is not simply a matter of the head, but of the right heart. "</span><strong style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><em style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">With the heart, man believes unto righteousness and with the mouth, confession is made unto salvation</span></em></strong><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">". The head appears to be a gateway for the determination of right from wrong so that the heart may believe the truth in the choice for good leading to God and the entire body directed to the path of choice, of life or death. There appears to be no path in-between, as there is simply good and evil. Jesus alludes to this in Revelations spitting out those that are neither hot nor cold, remaining undecided.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Adam losing the crown could be attributed to a lack of knowledge, and however you the ruler may choose to conceive of this, psychological or historical, I wonder if Adam had to leave the physical garden or it was that the garden he knew simply evaporated before his eyes replaced by the true nature of the world in which he lived. He had separated himself from the truth he once knew, his order gone, and what was left behind were the skeletons in the closet, order gone, chaos remained, and no midway was found. This looks very much like the story ensconced in the birth of a child, sheltered and innocent until thrust into the open, exposed now to the malevolent world, s/he must learn to fend for himself, set the crown aside that it may not be lost as the trudge through life ensues.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Foolishness characterizes the innocent making them unfit for the crown they wear from birth, a contradiction. The head must therefore be awakened, the only problem is the death of the heart seems inevitable in that process, and the person is only made fit for the crown again after the head has been awoken and the heart purged clean of the dirt it accumulates in the process. If Adam knew this as the plan, perhaps his question would have been about optimizing the process to limit exposure to debris or do a quick shovelling soon after accumulating a bit of dirt. Whatever his surmising of the situation, a man must inevitably die and be reborn before being able to produce fruit.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Life is suffering they say, but it seems a lot of people remain in the wilderness never learning the lessons required to reattain the order that is safety. Children regardless of their immediate surrounding, seem able to thrive without much care for their outward circumstance, building their castles with what is available, nothing to complain about during play, a state quite similar to the one Adam and Eve shared before the fall. This is seen in Christ's reference to children and the claim that no one would see the kingdom of God except they become like children. A pointer to the childlike innocence that one must possess despite having picked up a few bad habits in the learning of good sense and judgement.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">One lesson yet remains, it seems the path Adam would have preferred had he known the end from the beginning was to obey regardless of not knowing outcomes, but that is already a contradiction. Where would that be, with God or man? God, being God does allow free will within his plan. He allows repentance of the wayward son and a returning home of the lost. I am unsurprised that this is present in the plot. It is as though he expects a situation requiring repentance. Yet, there is a price to be paid by the disobedient son, his suffering however happens to also be his path to liberation, necessity forces him to diligently consider his ways or be forever lost. Who wants a simpleton for a son? Not God, in pondering this, I wondered why the prodigal son was treated better than the obedient son that stayed at home, never trying anything. For some reason, despite his good intentions, he reminds me of the one in the parable of talents that buried his gifts.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Of course, I do not advocate disobedience to parent or authority, however, it is an admonishment to figures of authority on the inevitability of disobedience, and the right attitude in response to it is that of correction with patience in love. The prodigal son also was treated royally even to the point of arousing the jealousy of his obedient brother. That seems out of sort with good sense. Shouldn't you want to reward the dutiful son for doing as you advise, for being good? To any sane person, this should be the right thing to do, the prodigal son only receiving the portion due to him by a measure of what good he managed.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">This idea is reinforced again by the parable Jesus tells of leaving the 99 and going after the one, what is so precious about the lost? Is it their blindness? The helplessness? Or is it the wisdom they must have gathered from their encounters weathering the storms of life? Or is it God simply having his fun at having people scratch their heads trying to figure all of this out? To make our case, shall we take the example of a man that goes on a journey? On his way, he encounters a trickster that makes him stumble, his feet cut, twice! The third time, he now knows the game and says to him with clarity in his voice, no sir, not today you don't! On that selfsame journey, he knows the love of a woman, but he knows intimately deceit and betrayal, as the twists and turns fashion his falling and rising. He returns home with gifts of knowledge and can guide others to receiving the same he did without the sorrows he endured. perhaps they have an opportunity to learn different lessons. Surely the right attitude of the parent should be to praise this.</span></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br></p><p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><span style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;;" data-preserver-spaces="true">Going down and coming back up is better than not having gone down at all, up suddenly becomes more valuable. This is what God knows and has made the adventure of Adam, a series of undulating cycles that must happen within laws and guidelines, obedience and choice. In there is wisdom embedded, borne of responsibility. With choice comes decision, the choice between good and evil now conferred as a responsibility on Adam et al., choosing has its consequences and rewards, life becomes the teacher of wisdom and prudence. This is the responsibility Adam and Eve now carried, they have to choose now, not God who knew everything and could easily direct their steps, and what do they know? What experience do they have? Thus the suffering, and the farther they went away from God and the garden - order, the more enshrined in chaos their lives became. Chaos became order, the devil rejoiced, Adam suffered and there was God, observing?</span></p>`;

  selectedClass = 'editor-fonts kam-fonts';
  dataChanged: boolean;

  @ViewChild('title', { static: true }) titleElement: ElementRef;
  @ViewChild('chatInput', { static: true }) chatInputElement: ElementRef;
  @ViewChild('chatScroll') private chatScrollContainer: ElementRef;

  chat: IChat = {
    messages: [
      {
        text: "Awesome, it's going to be an amazing time writing this",
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: 'By the way have you seen josh lately?',
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "No I have not, I'll look out though",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: "Can't wait!",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "Awesome, it's going to be an amazing time writing this",
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: 'By the way have you seen josh lately?',
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "No I have not, I'll look out though",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: "Can't wait!",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "Awesome, it's going to be an amazing time writing this",
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: 'By the way have you seen josh lately?',
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "No I have not, I'll look out though",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: "Can't wait!",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "Awesome, it's going to be an amazing time writing this",
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: 'By the way have you seen josh lately?',
        from: 'james@gmail.com',
        to: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
      {
        text: "No I have not, I'll look out though",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
      },
      {
        text: "Can't wait!",
        to: 'james@gmail.com',
        from: 'odm.major@gmail.com',
        img: '/assets/img/dummy-user.png',
        samePosition: true,
      },
    ],
    with: 'james@gmail.com',
  };

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatScrollContainer.nativeElement.scrollTop =
        this.chatScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
  last: string;
  constructor(titleElement: ElementRef, public authService: AuthService) {
    this.titleElement = titleElement;
  }

  public demo1TabIndex = 0;
  public getChat(content) {
    const tabCount = 3;
    this.demo1TabIndex = (this.demo1TabIndex + 1) % tabCount;
  }

  ngOnInit(): void {
    this.monitorChanges();
  }

  setChanged() {
    this.dataChanged = true;
  }

  sendChat(message) {
    if (message === '') return;

    let samePosition;
    try {
      samePosition =
        this.chat.messages[this.chat.messages.length - 1].from ===
        this.authService.userData.email;
    } catch {
      samePosition = undefined;
    }
    this.chat.messages.push({
      text: message,
      from: this.authService.userData.email,
      to: this.chat.with,
      img: this.authService.userData.photoURL,
      samePosition: samePosition,
    });
    this.chatInputElement.nativeElement.value = '';
  }

  monitorChanges() {
    const x = window.setInterval(() => {
      if (this.dataChanged === true) {
        // save data
        this.project.title = this.titleElement.nativeElement.innerHTML;

        this.titleElement.nativeElement.click();

        this.dataChanged = false;
      }
      return;
    }, 5000);
  }
}
