
ServerEvents.recipes(event=>{
	event.remove({output: 'vs_tournament:coal_dust'})
	event.remove({id:"create:mixing/lava_from_cobble"})
    event.remove

    event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)

    event.recipes.create.haunting("minecraft:charcoal","minecraft:coal")
    event.recipes.create.compacting("minecraft:tuff",[Item.of("minecraft:cobblestone").withCount(16),Fluid.water(100)])
	event.recipes.create.haunting('minecraft:amethyst_shard', "minecraft:quartz")
	event.recipes.create.mixing(Fluid.lava(200), Item.of("minecraft:cobblestone").withCount(4)).superheated()

    event.shaped(
  		Item.of('create_radar:data_link',1),
       [
        ' A ',
        ' B ',
        '   '
        ],
        {                          
            A:'create_radar:radar_dish_block',
            B:'create:display_link'
        }
     )
})
