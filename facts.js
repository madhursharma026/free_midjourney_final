const factData = [
    {
        "fact": "Fear of clowns is called coulrophobia"
    },
    {
        "fact": "In 1876, Maria Spelterina was the first woman to ever cross Niagara Falls on a high wire"
    },
    {
        "fact": "Ninety-five percent of tropical fish sold in North America originate from Florida"
    },
    {
        "fact": "People that suffer from gum disease are twice as likely to have a stroke or heart attack"
    },
    {
        "fact": "Most toilets flush in E flat"
    },
    {
        "fact": "In 1933, Mickey Mouse is believed to have received 800,000 fan letters"
    },
    {
        "fact": "Some toothpastes and deodorants contain the same chemicals found in antifreeze"
    },
    {
        "fact": "The term \"The Big Apple\" was coined by touring jazz musicians of the 1930s who used the slang expression \"apple\" for any town or city. Therefore, to play New York City is to play the big time - The Big Apple"
    },
    {
        "fact": "In 2000, there were 1,579,566 drug arrests in the United States. Of those, close to half were for marijuana"
    },
    {
        "fact": "On average, 90% of the people that have the disease Lupus are female"
    },
    {
        "fact": "The #1 peanut producing state is Georgia"
    },
    {
        "fact": "There were approximately 2,228 people on board the Titanic when it sank. Of this, only 706 people survived"
    },
    {
        "fact": "Author Dr. Seuss wrote the book \"Green Eggs and Ham\" because the editor made him a bet that he could not write a book, which contained less than fifty words"
    },
    {
        "fact": "The Eisenhower interstate system requires that one mile in every fivemust be straight. These straight sections are usable as airstrips intimes ofwar or other emergencies."
    },
    {
        "fact": "The average Hostess Twinkie is 68 percent air as measured by volume according to university researchers"
    },
    {
        "fact": "By partially filling saucers with vinegar and distributing the saucers around a room, you can eliminate odors"
    },
    {
        "fact": "There is a certain type of Hawk Moth caterpillar from Brazil that inflates its thorax, which makes its head look like a head of a snake when it feels it is in danger or alarmed"
    },
    {
        "fact": "Tomatoes and cucumbers are fruits"
    },
    {
        "fact": "Some farmers in Japan have learned to grow their watermelons into a square shape. They did this to conserve shelf space"
    },
    {
        "fact": "A fetus develops fingerprints at eighteen weeks"
    },
    {
        "fact": "2.5 cans of Spam are consumed every second in the United States"
    },
    {
        "fact": "The word assassination was invented by William Shakespeare"
    },
    {
        "fact": "Intelligent people have more zinc and copper in their hair"
    },
    {
        "fact": "Manitoulin Island is the largest island in a fresh water lake. It is located in Canadian Lake Superior"
    },
    {
        "fact": "When Heinz ketchup leaves the bottle, it travels at a rate of 25 milesper year."
    },
    {
        "fact": "The Pacific island of Tonga once issued a stamp that was banana shaped"
    },
    {
        "fact": "A single chocolate chip gives enough energy to a human being to walk 150 feet"
    },
    {
        "fact": "Ed Cox from San Francisco invented the pot scrubbing S.O.S. pads in 1917. His wife came up with the name, which stands for \"Save Our Saucepans.\""
    },
    {
        "fact": "Most dust particles in your house are made from dead skin"
    },
    {
        "fact": "In Ireland, a prime minister is a called a Taoiseach"
    },
    {
        "fact": "Actress Michelle Pfeiffer was the first choice to play Clarice Starling in the movie \"Silence of the Lambs.\" She turned down the role because she found it too scary"
    },
    {
        "fact": "Former U.S. President Ronald Reagan once wore a Nazi uniform while acting in a film during his Hollywood days. The name of the movie was \"Desperate Journey,\" which was filmed in 1942"
    },
    {
        "fact": "The first known American novelist to hand in a manuscript that was typed was Mark Twain. His typewriter was a Remington No.1, which was invented by Christopher Sholes and Carlos Glidden."
    },
    {
        "fact": "The fur of the binturong, also known as the \"Asian Bear Cat,\" smells like popcorn. The scent is believed to come from a gland located near the tail"
    },
    {
        "fact": "The first known contraceptive was crocodile dung, used by Egyptians in 2000 B.C"
    },
    {
        "fact": "It takes 12 honeybees to make one teaspoon of honey"
    },
    {
        "fact": "The largest pig on record was a Poland-China hog named Big Bill, who weighed 2,552 lbs"
    },
    {
        "fact": "Approximately 18 billion disposable diapers end up in landfills each year. These diapers can takes as long as 500 years to finally decompose"
    },
    {
        "fact": "Mary Hart, the co-anchor of Entertainment Tonight, has each of her legs insured for one million dollars"
    },
    {
        "fact": "In 1902, the game table tennis was brought to the U.S. from Europe by Parker Brothers"
    },
    {
        "fact": "In 1997, the record for the highest skydive by a dog at 4,572 feet was established by a dog named Brutus"
    },
    {
        "fact": "Ukrainian monk, Dionysius Exiguus, created the modern day Christian calendar"
    },
    {
        "fact": "The Popsicle was invented by 11 year-old Frank Epperson in 1905. He left his drink outside with a stir stick in it and he noticed that it had frozen. He applied for a patent in 1923 and named it \"Epsicle.\" The name was later changed to Popsicle"
    },
    {
        "fact": "Leaving the water running while brushing your teeth can waste four gallons of water in a minute"
    },
    {
        "fact": "Bourbon was first made by a Baptist minsister from Bourbon County in Kentucky in 1789. That is where it got its name"
    },
    {
        "fact": "Panthers are known as black leopards, as they are the same species of leopard. If looked at closely, black spots can be seen on a panther"
    },
    {
        "fact": "In-vitro babies are born in Australia more than any other country in the world"
    },
    {
        "fact": "Before the fur trade had started in Canada, it was estimated that there were over 6 million beavers"
    },
    {
        "fact": "Even though a polar bears fur looks white it is actually colourless and is made with hollow tubes. The reason the bear looks white is because the rough inner surface of the tubes make light scatter and reflect at many different angles which gives the white appearance"
    },
    {
        "fact": "It is possible to lead a cow upstairs but not downstairs"
    },
    {
        "fact": "If you spray an antiseptic spray on a polar bear, its fur will turn purple"
    },
    {
        "fact": "The spray WD-40 got its name because there were forty attempts needed before the creation of the \"water displacing\" substance"
    },
    {
        "fact": "The reason firehouses have circular stairways is from the days of yorewhen the engines were pulled by horses. The horses were stabled on theground floor and figured out how to walk up straight staircases."
    },
    {
        "fact": "The company \"Sony\" was originally called \"Totsuken.\" They felt the name \"Sony\" would be easier to pronounce. The name was invented by a cross between the name \"sonus\" and \"sonny.\" The name sound and sonic are derived. Sonny was used to represent a young man or boy, which would show a energetic young company"
    },
    {
        "fact": "There was a book written fourteen years before the sinking of the Titanic happened titled \"Futility\" by Morgan Robertson. This book was remarkably similar to the tragedy that happened to the Titanic in 1912"
    },
    {
        "fact": "4% of an apples is made up of minerals and vitamins, and over 80% is made up of water"
    },
    {
        "fact": "1 out of every 4 kids in the USA is overweight"
    },
    {
        "fact": "Many hamsters only blink one eye at a time"
    },
    {
        "fact": "The world record for time without sleep is 264 hours (11 days) by Randy Gardner in 1965"
    },
    {
        "fact": "The name of the popular sports drink Gatorade was named for the University of Florida Gators where it was developed"
    }
]

export default factData