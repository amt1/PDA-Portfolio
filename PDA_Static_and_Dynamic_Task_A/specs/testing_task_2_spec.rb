require( 'minitest/autorun' )
require_relative( '../testing_task_2.rb' )
require_relative('../card.rb')


class TestCardGame < MiniTest::Test

  def setup
    @cardgame1 = CardGame.new()
    @card1 = Card.new("hearts", 1)
    @card2 = Card.new("hearts", 2)
    @cards = [@card1, @card2]
  end

  def test_card_created
      assert_equal('hearts', @card1.suit)
  end

  def test_card_is_ace
    assert_equal(true, @cardgame1.checkforAce(@card1))
  end

  def test_highest_card
    assert_equal(@card2, @cardgame1.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 3", @cardgame1.cards_total(@cards))
  end
end
# end class
