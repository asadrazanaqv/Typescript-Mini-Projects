function order_sandwich(...items: string[]) {
    console.log(`You ordered a sandwich with: ${items.join(', ')}`);
}
  
order_sandwich("ham", "cheese", "lettuce");
order_sandwich("turkey", "bacon", "tomato", "mayo");
  