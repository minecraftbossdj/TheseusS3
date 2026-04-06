function applying(input, input2, output, event) {
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { 
            item: input 
        },
        {
            tag: input2
        }
      ],
      results: [
        { item: output }
      ]
    })
}

ServerEvents.recipes(event => {
    applying('create:shaft', 'minecraft:planks', 'create:cogwheel', event)
    applying('create:cogwheel', 'minecraft:planks', 'create:large_cogwheel', event)
})