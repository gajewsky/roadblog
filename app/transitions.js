export default function(){
  this.transition(
    this.fromRoute('posts.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
