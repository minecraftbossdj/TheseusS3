ServerEvents.recipes(event => {
	event.recipes.create.deploying('minecraft:chorus_fruit', ['minecraft:bamboo', 'minecraft:ender_pearl'])
	
	//create why no manual recipe
	event.shapeless(
      Item.of('minecraft:soul_sand', 1),
      [
        'minecraft:bone_block',
        'minecraft:sand'
      ]
    )
    
    //redstoner
	event.custom({
      type: 'vintage:vibrating',
      processingTime: 300,
      ingredients: [
        { item: 'create:cinder_flour' }
      ],
      results: [
        { item: 'minecraft:redstone', count: 1 }
      ]
    })
    
    event.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
        ' BSB ',
        'BMTMB',
        'BC CB',
        ' C C '
      ], {
        B: 'create:brass_sheet',
        M: 'create:precision_mechanism',
		T: 'create:copper_backtank',
		S: 'create:shaft',
        C: 'create:chute'
      }
	)
    
    event.recipes.create.mechanical_crafting('create_jetpack:netherite_jetpack', [
        ' BSB ',
        'BMTMB',
        'BC CB',
        ' C C '
      ], {
        B: 'create:brass_sheet',
        M: 'create:precision_mechanism',
		T: 'create:netherite_backtank',
		S: 'create:shaft',
        C: 'create:chute'
      }
	)
})