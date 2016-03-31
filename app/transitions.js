export default function(){
  this.transition(
    this.fromRoute('posts.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.hasClass('high-level'),
    this.toValue(true),
    this.use('fade', {duration: 1000}),
    this.reverse('toDown', {duration: 1000})
  );
}
