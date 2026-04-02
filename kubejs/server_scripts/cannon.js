ServerEvents.recipes(event=>{


function cannon(output, cannonMold) {
    event.shaped(output, [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'createbigcannons:nethersteel_ingot',
      B: cannonMold
    })
  }
  function expensiveCannon(output, cannonMold) {
    event.shaped(output, [
      '   ',
      'ABA',
      '   '
    ], {
      A: 'createbigcannons:nethersteel_block',
      B: cannonMold
    })
  }
  function cheapCannon(output, cannonMold) {
    event.shaped(output, [
      'A A',
      'ABA',
      'A A'
    ], {
      A: 'createbigcannons:nethersteel_ingot',
      B: cannonMold
    })
  }
  cheapCannon('createbigcannons:nethersteel_cannon_barrel', 'createbigcannons:very_small_cast_mould')
  cannon('createbigcannons:built_up_nethersteel_cannon_barrel', 'createbigcannons:small_cast_mould')
  cannon('createbigcannons:nethersteel_cannon_chamber', 'createbigcannons:medium_cast_mould')
  cannon('createbigcannons:built_up_nethersteel_cannon_chamber', 'createbigcannons:large_cast_mould')
  expensiveCannon('createbigcannons:thick_nethersteel_cannon_chamber','createbigcannons:very_large_cast_mould')
  cheapCannon('createbigcannons:incomplete_nethersteel_screw_breech', 'createbigcannons:screw_breech_cast_mould')
})
