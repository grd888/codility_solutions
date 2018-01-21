// Codility Lessons
//: Lesson 1 - Binary Gap
import UIKit

public func solution(_ N : Int) -> Int {
    // write your code in Swift 3.0 (Linux)
    let binary = String(N, radix:2)
    var max = 0
    var count = 0
    for (_, element) in binary.enumerated() {
        if element == "1" {
            if (count > max ) {
                max = count
            }
            count = 0
        } else {
            count += 1
        }
    }
    
    return max
}

let x = solution(9)


