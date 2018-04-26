from html.parser import HTMLParser

class CardWebHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Encountered a start tag:", tag)

    def handle_endtag(self, tag):
        print("Encountered an end tag :", tag)

    def handle_data(self, data):
        print("Encountered some data  :", data)

# CardInfo Class 
class CardInfo:
    ImageName = None
    CardType = None
    LevelSymbol = None
    ReqDiamond = None
    ReqTriangle = None
    ReqCircle = None
    ReqStart = None
    CardDescription = None
    Team = None
    Group = None
    Rarity = None
    SerialNo = None

# List of cards
cardList = []

# HTML parser
parser = CardWebHTMLParser()

# Html file to parse
file = open('../resources/baseinfo/AKBTCGVol.1CardCatalog.html', 'r')

# Feed file to HTML parser
parser.feed(file.read())
